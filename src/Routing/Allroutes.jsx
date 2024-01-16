import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Bookingpage from '../Pages/Bookingpage';
import Loginsignup from '../Pages/Loginsignup';
import Destination from '../Pages/Destination';

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/booking" element={<Bookingpage />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/login" element={<Loginsignup />} />
    </Routes>
  );
};

export default Allroutes;
