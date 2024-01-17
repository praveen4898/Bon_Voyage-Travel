import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
  <React.StrictMode>
     <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>
=======
 <ChakraProvider >
  <Provider store={store}>
   <Router>
    <App />
    </Router>
    </Provider>
 </ChakraProvider>
   
 
>>>>>>> e339753a3833c3833a9415eca911a6d18ee768d2
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
