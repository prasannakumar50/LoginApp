// SignupPage.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    // Perform signup logic here
    navigate('/login');
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <button onClick={handleSignup}>Signup</button>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default SignUpPage;
