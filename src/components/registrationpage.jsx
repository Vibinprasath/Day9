import React, { useState } from "react";
import '../components/registrationpage.css';
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};
    if (firstName.trim() === "") {
      validationErrors.firstName = "First Name is required";
    }
    if (lastName.trim() === "") {
      validationErrors.lastName = "Last Name is required";
    }
    if (email.trim() === "") {
      validationErrors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      validationErrors.email = "Invalid email address";
    }
    if (password.trim() === "") {
      validationErrors.password = "Password is required";
    }
    if (confirmPassword.trim() === "") {
      validationErrors.confirmPassword = "Confirm Password is required";
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-span">
        <h1>SIGNUP FORM</h1>
        <label htmlFor="firstName" className="label">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {errors.firstName && <span className="error">{errors.firstName}</span>}

        <label htmlFor="lastName" className="label">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {errors.lastName && <span className="error">{errors.lastName}</span>}

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

        <label htmlFor="confirmPassword" className="label">
          Re-Enter password
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword}</span>
        )}
      </div>
      <input className="submit" type="submit" value="Sign Up" />
      <span className="span">Already have an account? </span>
      <Link to="/LoginForm">
        <button>Sign In</button>
      </Link>
    </form>
  );
};

export default RegistrationPage;
