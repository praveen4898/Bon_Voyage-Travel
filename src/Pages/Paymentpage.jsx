
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, useToast, FormControl, FormLabel, Input, HStack, PinInput, PinInputField, Flex, Box, Select , Text} from '@chakra-ui/react';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    // Set the initial value of amount from the state passed from BookingPage
    if (location.state && location.state.amount) {
      setAmount(location.state.amount);
    }
  }, [location.state]);

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
      <Box flex="1" p="5" ml={"360px"} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' mt={"30px"} mb={"30px"} mr={"360px"}> 
        <div style={{display:"flex" , gap:"15px"}}>
          {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtsoMFdfPoV92m32OwEV9DpNVCIV44zGACmn81zpMHZn6-AASxGkWtJOcRal4SYNSXkqk&usqp=CAU" alt="..." style={{width:"20%", height:"20%"}}/> */}
        {/* <h1 style={{ color: 'black', fontSize: '30px', fontWeight="bold", marginBottom: '20px' , marginTop:"20px", textAlign:"center"}}>Payment Details</h1> */}
        <Text fontWeight="bold" mb={4} color="teal.500" fontFamily="cursive" fontSize="50px"  ml={"98px"}> 
       Payment Details
        </Text>
        </div>
        
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input type="name" value={name} onChange={(e) => setName(e.target.value)} />
        {/* </FormControl> */}

        {/* <FormControl isRequired> */}
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {/* </FormControl> */}

        {/* <FormControl isRequired> */}
          <FormLabel>From Where</FormLabel>
          <Input type="text" value={from} onChange={(e) => setFrom(e.target.value)} />
        {/* </FormControl> */}

        {/* <FormControl isRequired> */}
          <FormLabel>To Where</FormLabel>
          <Input type="text" value={to} onChange={(e) => setTo(e.target.value)} />
        {/* </FormControl> */}

        {/* <FormControl isRequired> */}
          <FormLabel>Amount</FormLabel>
          <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </FormControl>

        <Select placeholder='Select payment option' style={{marginTop:"10px",color:"black", fontSize:"20px" , fontFamily:"bolder"}}>
  <option value='option1'>Credit Card</option>
  <option value='option2'>Debit Card</option>
  <option value='option3'>Net Banking</option>
</Select>
        <HStack spacing="2" mt="4" >
          <label htmlFor="password" style={{ fontSize: '23px' , fontFamily:"bolder"}} isRequired>
            Enter Password
          </label>
          <PinInput type="numeric" mask>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>

        <Button onClick={handlePayAmount} mt="4" bg={"teal.500"} color={"white"}>
          Pay Amount 
        </Button>
      </Box>
      {/* <Box flex="1" position={"relative"} m={"60px"}>
       <img src="https://resize.indiatvnews.com/en/resize/newbucket/360_-/2019/07/digital-banking-fraud-1563089974.jpeg" alt="..." style={{width:"60%" , height:"50%" , objectFit: 'cover' , borderRadius:"30%"}}/>
        <img src="https://img.theweek.in/content/dam/week/magazine/theweek/business/images/2023/12/9/54-shutterstock.jpg" alt="Payment" style={{ width: '50%', height: '30%', objectFit: 'cover' , marginTop:"20px" , borderRadius:"20%" , marginLeft:"25px"}} />
      </Box> */}
    </Flex>
   
    
  );
};

export default PaymentPage;