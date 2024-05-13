import React, { useState } from 'react';
import styles from '../styles/Home.module.css'; // Import CSS styles

const LandingPage: React.FC = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const toggleForm = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  const renderLoginForm = () => {
    return (
      <div className={styles.formContainer}>
        <h2>Login</h2>
        {/* Login form */}
        <form>
          <div>
            <label htmlFor="usernameOrEmail">Username or Email</label>
            <input type="text" id="usernameOrEmail" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Login</button>
        </form>
        <p onClick={toggleForm}>Don't have an account? Register here</p>
      </div>
    );
  };

  const renderRegisterForm = () => {
    // Define options for the campus dropdown
    const campusOptions = ['CET', 'IT', 'TC', 'EC', 'CP', 'IMS'];
  
    // Define options for the year dropdown
    const yearOptions = ['1st', '2nd', '3rd', '4th'];
  
    return (
      <div className={styles.formContainer}>
        <h2>Register</h2>
        {/* Register form */}
        <form>
          <div className={styles.formRow}>
            <div className={styles.formField}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>
            <div className={styles.formField}>
              <label htmlFor="rollNumber">Roll Number</label>
              <input type="text" id="rollNumber" />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formField}>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className={styles.formField}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
          </div>
          <div className={styles.formField}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="campus">Campus</label>
            <select id="campus">
              {campusOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className={styles.formField}>
            <label htmlFor="year">Year</label>
            <select id="year">
              {yearOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className={styles.formField}>
            <label htmlFor="branch">Branch</label>
            <input type="text" id="branch" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="section">Section</label>
            <input type="text" id="section" />
          </div>
          <button type="submit">Register</button>
        </form>
        <p onClick={toggleForm}>Already have an account? Login here</p>
      </div>
    );
  };  
  
  
  return (
    <div className={styles.container}>
      <h1>Welcome to AssMints</h1>
      <div className={styles.content}>
        <div className={styles.formBox}>
          {showRegisterForm ? renderRegisterForm() : renderLoginForm()}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
