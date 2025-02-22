// components/SignUp.jsx
import React, { useState } from 'react';

function SignUp() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    // For this example, we'll just display a success message
    setMessage('Sign up successful');
    setId(''); // Clear the input fields
    setPassword('');
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        /><br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />

        <button type="submit">Continue</button>
      </form>
      {message && <p>{message}</p>} {/* Conditionally render the message */}
    </div>
  );
}
export default SignUp;