import React, { useState } from 'react';
import axios from 'axios';
import "../CSS/login.css"

import { useDispatch } from 'react-redux';
import { loginUser } from '../Redux/action';
import {useNavigate} from 'react-router-dom';
import { useToast } from '@chakra-ui/react';




export const Loginform = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    const navigate=useNavigate()

    const toast = useToast()

      const dispatch=useDispatch()
      const handleLogin =  (e) => {
        e.preventDefault();
    
        dispatch(loginUser(formData))
        .then(()=>{
          toast({
            title: 'Login Sucessful.',
            description: "User Logged in successfully",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
            navigate('/')
            
        })
        .catch((err)=>{
          toast({
            title: 'Login Failed.',
            description: "Invalid credential",
            status: 'Failure',
            duration: 9000,
            isClosable: true,
          })
        })
        // try {
        //   const response = await axios.post('https://mockserver-3.onrender.com/users', formData);
        //   // const { token } = response.data;
    
        //   localStorage.setItem('token', token);
        //     } catch (error) {
        //   console.error('Error during login:', error);
        // }
      };
    return (
        <div className='signuppage'>
            <h1 className='heading' style={{width:"fit-content", margin:"auto", fontSize:"40px"}}>Login Page</h1>
            <form onSubmit={handleLogin}>
                <label style={{margin:"auto", color:"aliceblue", fontSize:"19px",}}>
                    Username
                    <br />
                    <input
                        className='usernamelogin'
                        type="text"
                        name="email"
                        placeholder='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label style={{margin:"auto", color:"aliceblue", fontSize:"19px"}}>
                    Password
                    <br />
                    <input
                        className='passwordlogin'
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