import React, { useState } from 'react';
import axios from 'axios';
import "../CSS/signup.css"
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../Redux/action';
import { useNavigate } from 'react-router-dom';





export const SignupForm = () => {
    const [formData, setFormData] = useState({
        firstname:'',
        lastname:'',

        email: '',
        password: '',
    });
    const navigate=useNavigate();
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
        navigate('/login')
        
       
        
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

                        name="firstName"
                        placeholder='First name'
                        value={formData.firstName}


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

                        name="lastName"
                        placeholder='Last name'
                        value={formData.lastName}

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

                    <button className='btn' type="submit">Sign Up</button>

            </form>
        </div>
    )








};

export default SignupForm;