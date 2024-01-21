// FirstDiv.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Heading, Input, InputGroup, InputLeftElement, Icon, Button } from '@chakra-ui/react';
import { FaSearch, FaCalendar } from 'react-icons/fa';
import backgroundImage from '../Image/option1.jpg';

const FirstDiv = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
   
    navigate(`/destination?country=${encodeURIComponent(searchInput)}`);
  };

  return (
    <>
    <Box
      className='home'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box marginBottom="auto" paddingTop="90px" textAlign="center">
        <Heading
          as="h1"
          size="4xl"
          color="white"
          mb={6}
          fontFamily="cursive"
          fontWeight="bold"
          marginTop="70px"
          letterSpacing="2px"
        >
          Travel around the world
        </Heading>
        <Heading as='h2' size='lg' color="white" fontFamily="poppins" fontWeight="bold">
          Trusted by 80 million Travelers, Aalcazar is the world's most competitive travel,
        </Heading>
        <Heading as='h2' size='lg' color="white" fontFamily="poppins" fontWeight="bold">
          flight and accommodation provider, very easy to access on your smart tree and desktop
        </Heading>
        <Heading as='h2' size='lg' color="white" fontFamily="poppins" fontWeight="bold">
          on your smart tree and desktop
        </Heading>
      </Box>

      
    </Box>

  <Box
  display="flex"
  flexDirection={{ base: 'column', md: 'row' }}
  alignItems="center"
  ml={{base:"0",md:"23%"}}
  mt={{ base: '20px', md: '-60px' }}
  bgColor="white"
  width={{ base: '100%', md: '850px' }}
  padding="20px"
  boxShadow="0 4px 8px rgba(0, 0, 0, 0.4)"
  borderRadius="2xl"
  position="relative"
  h={{ base: '200px',md:'120px' }}
  >
  <InputGroup size="md" mb={{ base: 4, md: 0 }} mr={{ base: 0, md: 2 }} width={{ base: '100%', md: '100%' }} border="1px solid teal">
    <InputLeftElement pointerEvents="none">
      <Icon as={FaSearch} color="gray.300" />
    </InputLeftElement>
    <Input
    
    value={searchInput}
    onChange={(e) => setSearchInput(e.target.value)}
      type="text"
      placeholder="Enter Destination"
      borderRadius="5px"
      border="none"
      _focus={{ border: 'none', outline: 'none' }}
      
    />
  </InputGroup>
  
  <InputGroup size="md" mb={{ base: 4, md: 0 }} mr={{ base: 0, md: 2 }} width={{ base: '100%', md: '100%' }} border="1px solid teal">
    <InputLeftElement pointerEvents="none">
      <Icon as={FaCalendar} color="gray.300" />
    </InputLeftElement>
    <Input
      type="date"
      placeholder="Select Date"
      borderRadius="5px"
      border="none"
      _focus={{ border: 'none', outline: 'none' }}
  
    />
  </InputGroup>
  
  <Button  onClick={handleSearch} colorScheme="teal" width={{ base: '100%', md: '150px' }} height="43px">
    Search
  </Button>
  </Box>

</>
  );
};

export default FirstDiv;
