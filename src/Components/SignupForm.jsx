import React, { useState } from 'react';
import axios from 'axios';
import "../CSS/signup.css"
import { Link } from 'react-router-dom';

export const SignupForm = () => {
    const [formData, setFormData] = useState({
        firstname:'',
        lastname:'',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://mockserver-3.onrender.com/users', formData);
            console.log('Server response:', response.data);
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };
    return (
        <div className='signup'>
            <h1 className='heading' style={{width:"fit-content", margin:"auto", fontSize:"40px"}}>Signup Page</h1>
            <form onSubmit={handleSubmit}>
            <label style={{margin:"auto", color:"aliceblue", fontSize:"19px",}}>
                    First Name
                    <br />
                    <input
                        className='username'
                        type="text"
                        name="firstname"
                        placeholder='First name'
                        value={formData.firstname}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label style={{margin:"auto", color:"aliceblue", fontSize:"19px",}}>
                    Last Name
                    <br />
                    <input
                        className='username'
                        type="text"
                        name="lastname"
                        placeholder='Last name'
                        value={formData.lastname}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label style={{margin:"auto", color:"aliceblue", fontSize:"19px",}}>
                    Username
                    <br />
                    <input
                        className='username'
                        type="email"
                        name="email"
                        placeholder='Email'
                        value={formData.email}
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
                <Link to="/login"><button className='btn' type="submit">Sign Up</button></Link>
            </form>
        </div>
    )
};

export default SignupForm;