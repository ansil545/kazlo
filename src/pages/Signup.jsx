import React, { useState } from 'react';
import "../pages/Signup.css"

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');


    if (!fullName || !email || !password) {
      setError('Please fill in all fields');
    } else if (password.length < 6) {
      setError('Password should be at least 6 characters long');
    } else {
    
      
    }
  };

  return (
    <div className="sign-up">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <div className="error">{error}</div>}

        <div className="btnhead">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
