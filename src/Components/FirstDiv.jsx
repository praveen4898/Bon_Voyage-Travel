import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import backgroundImage from '../Image/homeBG.jpg';
import React from 'react';

const FirstDiv = () => {
  return (
    <Box
      className='home'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        height: '95vh',
      }}
    >
      <Flex
        direction="row"
        justify="center"
        align="center"
        height="100%"
      >
        {/* First Section */}
        <Box
          border="1px solid red"
          p={8}
          boxShadow="lg"
          borderRadius="md"
          mr={4}
          height="600px"
          width="400px"
        >
          {/* Content for the first section goes here */}
          <VStack spacing={4}>
            {/* Card 1 */}
            <Box
              p={4}
              boxShadow="md"
              borderRadius="md"
              width="100%"
              height="300px"
              border="1px solid black"
            >
              <Heading fontSize="xl">Card 1</Heading>
              
            </Box>

            {/* Card 2 */}
            <Box
              p={4}
              boxShadow="md"
              borderRadius="md"
              width="100%"
              height="220px"
              border="1px solid black"
            >
              <Heading fontSize="xl">Card 2</Heading>
              
            </Box>
          </VStack>
        </Box>

        {/* Second Section */}
        <Box
          border="1px solid red"
          p={8}
          boxShadow="lg"
          borderRadius="md"
          height="600px"
          width="900px"
        >
          {/* Content for the second section goes here */}
          <p>Second Section</p>
        </Box>
      </Flex>
    </Box>
  );
}

export default FirstDiv;
