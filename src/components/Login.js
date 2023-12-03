import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function Login() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    fullname: '',
    email: '',
    password: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInput(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { fullname, email, password } = input;

    if (fullname.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
      // If all fields are filled, navigate to the dashboard
      navigate('/dashboard');
      alert(`Thanks  ${input.fullname} for joining us`)
    } else {
      // If any field is empty, show an alert
      alert('Please enter all fields');
    }
  }

  return (
    
<div
style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Optional: adjust the height as needed
    background: 'white' 
    }}
    
>
    <form onSubmit={handleSubmit}
    style={{
        border: '1px solid blue',
        padding: '100px',
        borderRadius: '10px',
        backgroundColor: 'yellow'
    }}
    >
      <label>
        Username
        <input
          type="text"
          name="fullname"
          placeholder="Enter a valid username"
          value={input.fullname}
          onChange={handleChange}
        />
      </label>
      <br />
      <label
      
      >
        Email
        <input
          type="email"
          name="email"
          placeholder="Input your email"
          value={input.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password
        <input
          type="password"
          name="password"
          placeholder="Enter a valid password"
          value={input.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>

    </div>
  );
}
export default Login;
