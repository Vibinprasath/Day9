import React, { useState } from 'react';
import './loginpage.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = {};

    if (email.trim() === '') {
      validationErrors.email = 'Email is required';
    }

    if (password.trim() === '') {
      validationErrors.password = 'Password is required';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Perform login logic here
      console.log('Login successful!');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-span">
        <h1>LOGIN FORM</h1>
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="input-span">
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <span className="span">
        <a href="#">Forgot password?</a>
      </span>
      <Link to="/navigationpage">
        <input className="submit" type="submit" value="Log in" />
      </Link>
      <span className="span">Don't have an account? </span>
      <Link to="/registrationpage">
        <button>Sign Up</button>
      </Link>
    </form>
  );
};

export default LoginForm;
