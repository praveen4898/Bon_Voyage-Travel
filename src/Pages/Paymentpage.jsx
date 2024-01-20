// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { Button, useToast, FormControl, FormLabel, Input } from '@chakra-ui/react';

// const PaymentPage = () => {
//   const location = useLocation();
//   const toast = useToast();

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [from, setform] = useState('');
//   const [to, setTo] = useState('');
//   const[amount, setAmount] = useState('');

//   // const { fromWhere, toWhere, amount } = location.state.bookingDetails;

//   const handlePayAmount = async () => {
//     if (!name || !email || !from || !to || !amount) {
//       toast({
//         title: 'Fill in all details',
//         status: 'warning',
//         duration: 3000,
//         isClosable: true,
//       });
//       return;
//     }

//     try {
//       await paymentProcessing();
//       toast({
//         title: 'Payment Successful',
//         status: 'success',
//         duration: 3000,
//         isClosable: true,
//       });
//     } catch (error) {
//       toast({
//         title: 'Payment Failed',
//         description: 'Please try again.',
//         status: 'error',
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };

//   const paymentProcessing = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const random = Math.random(); 
//         if (random < 0.5) {
//           resolve();
//         } else {
//           reject(new Error('Payment failed'));
//         }
//       }, 2000);
//     });
//   };

//   return (
//     <div>
//       <h1 style={{color:"black", fontSize:"30px", fontWeight:"bolder" , padding:"5px"}}>Payment Page</h1>
//       {/* <p style={{color:"black", fontSize:"18px", fontWeight:"bold" , padding:"5px"}}>Booking Details:</p>
//       <pre>{JSON.stringify(location.state.bookingDetails, null, 2)}</pre> */}
//       <FormControl isRequired style={{paddingBottom:"5px"}}>
//         <FormLabel>Name</FormLabel>
//         <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       </FormControl>

//       <FormControl isRequired>
//         <FormLabel>Email</FormLabel>
//         <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </FormControl>

//       <FormControl >
//         <FormLabel>From Where</FormLabel>
//         <Input type="text" value={from}  />
//       </FormControl>

//       <FormControl >
//         <FormLabel>To Where</FormLabel>
//         <Input type="text" value={to}  />
//       </FormControl>

//       <FormControl >
//         <FormLabel>Amount</FormLabel>
//         <Input type="number" value={amount}  />
//       </FormControl>

//       <Button onClick={handlePayAmount} style={{marginTop:"10px"}}>Pay Amount</Button>
//     </div>
//   );
// };

// export default PaymentPage;


// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Button, useToast, FormControl, FormLabel, Input, HStack, PinInput, PinInputField } from '@chakra-ui/react';

// const PaymentPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const toast = useToast();

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const[from , setFrom]=useState('');
//   const[to , setTo]=useState('');
//   const[amount,setAmount]=useState('');

//   // const { bookingDetails } = location.state || {};
//   // const { fromWhere, toWhere, amount } = bookingDetails || {};

//   const handlePayAmount = async () => {
//     if (!name || !email || !from || !to || !amount) {
//       toast({
//         title: 'Fill in all details',
//         status: 'warning',
//         duration: 3000,
//         isClosable: true,
//       });
//       return;
//     }

//     try {
//       // ... (your payment processing logic)

//       toast({
//         title: 'Payment Successful',
//         status: 'success',
//         duration: 3000,
//         isClosable: true,
//       });

//       // Redirect to Booking page after successful payment
//       navigate('/booking');
//     } catch (error) {
//       toast({
//         title: 'Payment Failed',
//         description: 'Please try again.',
//         status: 'error',
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };

//   return (
//     <div style={{height:"100px" , weight:"100px" }}>
//       <h1 style={{ color: 'black', fontSize: '30px', fontWeight: 'bolder', padding: '5px' }}>Payment Page</h1>
//       <FormControl isRequired style={{ paddingBottom: '5px' }}>
//         <FormLabel>Name</FormLabel>
//         <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       </FormControl>

//       <FormControl isRequired>
//         <FormLabel>Email</FormLabel>
//         <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </FormControl>

//       <FormControl isRequired>
//         <FormLabel>From Where</FormLabel>
//         <Input type="text" value={from} onChange={(e) => setFrom(e.target.value)}/>
//       </FormControl>

//       <FormControl isRequired>
//         <FormLabel>To Where</FormLabel>
//         <Input type="text" value={to} onChange={(e) => setTo(e.target.value)}/>
//       </FormControl>

//       <FormControl isRequired>
//         <FormLabel>Amount</FormLabel>
//         <Input type="number" value={amount}  onChange={(e) => setAmount(e.target.value)}/>
//       </FormControl>
//       <HStack style={{marginTop:"8px"}}>
//       <label htmlFor="password" style={{fontSize:"26px"}} isRequired>Enter Password</label>
//       <br />
//       <PinInput type='alphanumeric' mask>
//         <PinInputField />
//         <PinInputField />
//         <PinInputField />
//         <PinInputField />
//         <PinInputField />
//         <PinInputField />
//       </PinInput>
//     </HStack>

//       <Button onClick={handlePayAmount} style={{ marginTop: '10px' }}>
//         Pay Amount
//       </Button>
//     </div>
//   );
// };

// export default PaymentPage;


import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, useToast, FormControl, FormLabel, Input, HStack, PinInput, PinInputField, Flex, Box, Select } from '@chakra-ui/react';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');

  const handlePayAmount = async () => {
        if (!name || !email || !from || !to || !amount) {
          toast({
            title: 'Fill in all details',
            status: 'warning',
            duration: 3000,
            isClosable: true,
          });
          return;
        }
    
        try {
          // await paymentProcessing();
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

  return (
    <Flex >
      <Box flex="1" p="5">
        <div style={{display:"flex" , gap:"15px"}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtsoMFdfPoV92m32OwEV9DpNVCIV44zGACmn81zpMHZn6-AASxGkWtJOcRal4SYNSXkqk&usqp=CAU" alt="..." style={{width:"20%", height:"20%"}}/>
        <h1 style={{ color: 'black', fontSize: '30px', fontWeight: 'bolder', marginBottom: '20px' , marginTop:"20px"}}>Payment Page</h1>
        </div>
        
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input type="name" value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>From Where</FormLabel>
          <Input type="text" value={from} onChange={(e) => setFrom(e.target.value)} />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>To Where</FormLabel>
          <Input type="text" value={to} onChange={(e) => setTo(e.target.value)} />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Amount</FormLabel>
          <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </FormControl>

        <Select placeholder='Select payment option' style={{marginTop:"10px",color:"black", fontSize:"20px" , fontFamily:"bolder"}}>
  <option value='option1'>Credit Card</option>
  <option value='option2'>Debit Card</option>
  <option value='option3'>Option 3</option>
</Select>
        <HStack spacing="2" mt="4">
          <label htmlFor="password" style={{ fontSize: '23px' , fontFamily:"bolder"}} isRequired>
            Enter Password
          </label>
          <PinInput type="alphanumeric" mask>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>

        <Button onClick={handlePayAmount} mt="4">
          Pay Amount {amount}
        </Button>
      </Box>
      <Box flex="1">
       
        <img src="https://img.theweek.in/content/dam/week/magazine/theweek/business/images/2023/12/9/54-shutterstock.jpg" alt="Payment" style={{ width: '80%', height: '80%', objectFit: 'cover' , marginTop:"20px" , borderRadius:"20%"}} />
      </Box>
    </Flex>
    
  );
};

export default PaymentPage;
