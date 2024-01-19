// import React from 'react'

// const Paymentpage = () => {
//   return (
//     <div>Paymentpage</div>
//   )
// }

// export default Paymentpage

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, useToast, FormControl, FormLabel, Input } from '@chakra-ui/react';

const PaymentPage = () => {
  const location = useLocation();
  const toast = useToast();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const { fromWhere, toWhere, amount } = location.state.bookingDetails;

  const handlePayAmount = async () => {
    if (!name || !email ) {
      toast({
        title: 'Fill in all details',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      await paymentProcessing();
      toast({
        title: 'Payment Successful',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Payment Failed',
        description: 'Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const paymentProcessing = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random(); 
        if (random < 0.5) {
          resolve();
        } else {
          reject(new Error('Payment failed'));
        }
      }, 2000);
    });
  };

  return (
    <div>
      <h1 style={{color:"black", fontSize:"30px", fontWeight:"bolder" , padding:"5px"}}>Payment Page</h1>
      {/* <p style={{color:"black", fontSize:"18px", fontWeight:"bold" , padding:"5px"}}>Booking Details:</p>
      <pre>{JSON.stringify(location.state.bookingDetails, null, 2)}</pre> */}
      <FormControl isRequired style={{paddingBottom:"5px"}}>
        <FormLabel>Name</FormLabel>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormControl>

      <FormControl >
        <FormLabel>From Where</FormLabel>
        <Input type="text" value={fromWhere} isReadOnly />
      </FormControl>

      <FormControl >
        <FormLabel>To Where</FormLabel>
        <Input type="text" value={toWhere}  isReadOnly/>
      </FormControl>

      <FormControl >
        <FormLabel>Amount</FormLabel>
        <Input type="number" value={amount}  isReadOnly/>
      </FormControl>

      <Button onClick={handlePayAmount} style={{marginTop:"10px"}}>Pay Amount</Button>
    </div>
  );
};

export default PaymentPage;