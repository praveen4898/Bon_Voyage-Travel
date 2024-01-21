import React, { useState } from 'react';
import axios from 'axios';
import "../CSS/signup.css"


export const Loginform = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('https://mockserver-3.onrender.com/users', formData);
          const { token } = response.data;
    
          localStorage.setItem('token', token);
            } catch (error) {
          console.error('Error during login:', error);
        }
      };
    return (
        <div className='signuppage'>
            <h1 className='heading' style={{width:"fit-content", margin:"auto", fontSize:"40px"}}>Login Page</h1>
            <form onSubmit={handleLogin}>
                <label style={{margin:"auto", color:"aliceblue", fontSize:"19px",}}>
                    Username
                    <br />
                    <input
                        className='username'
                        type="text"
                        name="username"
                        placeholder='Username'
                        value={formData.username}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label style={{margin:"auto", color:"aliceblue", fontSize:"19px"}}>
                    Password
                    <br />
                    <input
                        className='password'
                        type="password"
                        name="password"
                        placeholder='password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button className='btn' type="submit">Login</button>
            </form>
        </div>
    )
};

export default Loginform;