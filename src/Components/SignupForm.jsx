import React, { useState } from 'react';
import axios from 'axios';
import "../CSS/signup.css"
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../Redux/action';


export const SignupForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

 const dispatch= useDispatch();

const users=useSelector((store)=>store.users)
console.log(users)
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(formData))
        
        // try {
        //     const response = await axios.post('https://mockserver-3.onrender.com/users', formData);
        //     console.log('Server response:', response.data);
        // } catch (error) {
        //     console.error('Error submitting data:', error);
        // }

        
    };
    return (
        <div className='signuppage'>
            <h1 className='heading' style={{width:"fit-content", margin:"auto", fontSize:"40px"}}>Signup Page</h1>
            <form onSubmit={handleSubmit}>
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
                <button className='btn' type="submit">Sign Up</button>
            </form>
        </div>
    )
};

export default SignupForm;