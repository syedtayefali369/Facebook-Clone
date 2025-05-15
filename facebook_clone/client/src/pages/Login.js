import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/auth/login', form);
    localStorage.setItem('token', res.data.token);
    alert('Logged in!');
  };
  return (
    <form onSubmit={onSubmit} className="max-w-md mx-auto p-4">
      <h2 className="text-2xl mb-4">Login</h2>
      <input name="email" onChange={onChange} placeholder="Email" type="email" className="w-full p-2 border mb-2" />
      <input name="password" onChange={onChange} placeholder="Password" type="password" className="w-full p-2 border mb-2" />
      <button type="submit" className="p-2 bg-blue-500 text-white">Login</button>
    </form>
  );
};

export default Login;
