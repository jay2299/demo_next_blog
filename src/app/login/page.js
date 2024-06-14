'use client'
import { useState } from 'react';
import Link from 'next/link';
import '../globals.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link href="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;
