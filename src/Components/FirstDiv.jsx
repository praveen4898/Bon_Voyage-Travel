// FirstDiv.js
import React, { useState } from 'react';
import { Box, Heading, Input, InputGroup, InputLeftElement, Icon, Button, Select } from '@chakra-ui/react';
import { FaSearch, FaCalendar } from 'react-icons/fa';
import backgroundImage from '../Image/option1.jpg';

const FirstDiv = () => {
  const [destination, setDestination] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleSearchChange = (event) => {
    setDestination(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Perform search logic with destination, selectedDate
    console.log('Searching for:', destination, 'on', selectedDate);
  };

  return (
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
      <Heading as="h1" size="xl" color="white" mb={6}>
        Welcome to My Website
      </Heading>

      {/* Destination Input */}
      <InputGroup size="md" width="300px" mb={4}>
        <InputLeftElement pointerEvents="none">
          <Icon as={FaSearch} color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Enter Destination"
          value={destination}
          onChange={handleSearchChange}
        />
      </InputGroup>

      {/* Date Selector */}
      <InputGroup size="md" width="300px" mb={4}>
        <InputLeftElement pointerEvents="none">
          <Icon as={FaCalendar} color="gray.300" />
        </InputLeftElement>
        <Input
          type="date"
          placeholder="Select Date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </InputGroup>

      {/* Search Button */}
      <Button colorScheme="teal" onClick={handleSearchSubmit} mb={6}>
        Search
      </Button>
    </Box>
  );
};

export default FirstDiv;
