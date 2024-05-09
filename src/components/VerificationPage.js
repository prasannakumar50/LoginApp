import React, { useState } from 'react';
import Header from './Header';
import { useLocation, useNavigate } from 'react-router-dom';

const VerificationPage = () => {

  const [codeInputs, setCodeInputs] = useState(Array(8).fill(''));


  const handleInputChange = (index, event) => {
    const newValue = event.target.value;
   
    const newInputs = [...codeInputs];
   
    newInputs[index] = newValue;
  
    setCodeInputs(newInputs);
  };

  const location = useLocation();
  const email = location.state ? location.state.email : '';

  const navigate = useNavigate();

  const handleVerify = () => {
    // Perform verification logic here

    // Redirect to browse page
   

    navigate('/login', { state: { isSignInForm: false } });
  };

  return (
    <div>
        <Header />
    <div className="flex flex-col items-center justify-center h-screen ">
    <div className="border border-gray-400 p-8 mt-6 rounded-xl ">
      <h1 className="text-3xl font-bold mb-4 flex  justify-center ">Verify Your Email</h1>
      <p className="mb-4 text-black  flex  justify-center">Enter the 8-digit code you received on </p>
      <p className=" mb-2 text-black font-bold flex  justify-center">{email}</p> 
      <h1 className='flex-col m-1 p-2 font-bold'>Code</h1>
      {/* Render input boxes */}
      <div className="flex justify-center">
        {codeInputs.map((value, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            className="w-12 h-12 rounded border border-gray-300 text-center mr-2"
            value={value}
            onChange={(event) => handleInputChange(index, event)}
          />
        ))}
        
      </div>
      <button className="p-2 my-6 w-full rounded-md  border border-gray-400 bg-black text-white"onClick={handleVerify} >VERIFY</button>
    </div>
    </div>
    </div>
  );
};

export default VerificationPage;
