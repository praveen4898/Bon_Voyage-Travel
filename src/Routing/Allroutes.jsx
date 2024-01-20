import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Bookingpage from '../Pages/Bookingpage';
import Loginsignup from '../Pages/Loginsignup';
import Destination from '../Pages/Destination';
import  Singledestination  from '../Pages/Singledestination';
import Paymentpage from '../Pages/Paymentpage';
import Admin from '../Pages/Admin';
import Defaultpage from '../Pages/Defaultpage';
import Support from '../Pages/Support';

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/booking" element={<Bookingpage />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/singledestination/:id" element={<Singledestination />} />
      <Route path="/support" element={<Support/>} />
      <Route path="/login" element={<Loginsignup />} />
      <Route path="/payment" element={<Paymentpage />}/>
      <Route path='/admin' element={<Admin /> }/>
      <Route path='/*' element={<Defaultpage />}/>

    </Routes>
  );
};

export default Allroutes;


