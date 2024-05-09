import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { auth } from "../utils/firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);

    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        // Check if state is passed from VerificationPage and set isSignInForm accordingly
        if (location.state && location.state.isSignInForm !== undefined) {
            setIsSignInForm(location.state.isSignInForm);
        }
    }, [location.state]);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const generateRandomCode = () => {
        return Math.floor(10000000 + Math.random() * 90000000); // Generate random 8-digit code
    };

    const handleButtonClick = () => {
        // Validate the form data
        const message = checkValidData(email.current.value, password.current.value);

        if (!message) {
            if (isSignInForm) {
                // Redirect to verification page
                const verificationCode = generateRandomCode();
                navigate('/verification', {
                    state: { email: email.current.value, code: verificationCode }
                });
            } else {
                // Create user and then sign in
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        // Sign in with the created user
                        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                            .then((userCredential) => {
                                const user = userCredential.user;
                                console.log(user);
                                navigate('/dashboard');
                            })
                            .catch((error) => {
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                setErrorMessage(errorCode + " - " + errorMessage);
                            });
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setErrorMessage(errorCode + " - " + errorMessage);
                    });
            }
        } else {
            setErrorMessage(message);
        }
    };

    return (
        <div>
            <Header />
            <form className='w-3/6 p-12 border border-gray-400 my-24 mx-auto right-0 left-0 text-black rounded-2xl' onSubmit={(e) => e.preventDefault()}>
                <h1 className='text-black font-bold flex justify-center text-3xl'>{isSignInForm ? 'Create your account' : 'Login'}</h1>
                {!isSignInForm && (
                    <div>
                    <p className="text-black font-bold text-2xl flex justify-center m-2 p-2">Welcome back to Ecommerce</p>
                    <p className="text-black  flex justify-center">The next gen business market place</p>
                    </div>
                )}
                {isSignInForm && (
                    <div>
                        <label className='text-black font-bold'>Full Name</label>
                        <input type="text" placeholder="Enter full name" className="p-2 my-2 w-full rounded-md border border-gray-400" />
                    </div>
                )}
                <label className='text-black font-bold'>Email</label>
                <input type="text" ref={email} placeholder="Enter email" className="p-2 my-2 w-full rounded-md border border-gray-400" />
                <label className='text-black font-bold'>Password</label>
                <input type="password" ref={password} placeholder="Enter password" className="p-2 my-2 w-full rounded-md border border-gray-400" />
                <p className="text-red-600 font-bold text-lg">{errorMessage}</p>
                <button className="p-2 my-4 w-full rounded-md border border-gray-400 bg-black text-white" onClick={handleButtonClick}>{isSignInForm ? 'CREATE ACCOUNT' : 'LOGIN'}</button>
                <p className='text-black cursor-pointer text-center' onClick={toggleSignInForm}>{isSignInForm ? 'Have an account? LOGIN' : 'Create an account? SIGN UP'}</p>
            </form>
        </div>
    );
};

export default Login;
