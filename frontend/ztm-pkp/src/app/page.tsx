// pages/page.tsx
'use client';
import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add login logic
    console.log('Attempting login');
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Login Page</h1>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ marginBottom: '15px', fontSize: '16px', color: '#555' }}>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ color: '#333', marginTop: '5px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </label>
        <label style={{ marginBottom: '15px', fontSize: '16px', color: '#555' }}>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ color: '#333', marginTop: '5px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </label>
        <button
          type="submit"
          style={{ backgroundColor: '#4CAF50', color: 'white', padding: '15px', borderRadius: '4px', cursor: 'pointer', fontSize: '18px', marginBottom: '10px' }}
        >
          Login
        </button>
        <button
          type="button"
          onClick={() => window.location.href = '/register'}
          style={{ backgroundColor: '#3498db', color: 'white', padding: '15px', borderRadius: '4px', cursor: 'pointer', fontSize: '18px' }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
