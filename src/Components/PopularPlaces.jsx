
import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

const PopularPlaces = () => {
  return (
    <div style={{ marginBottom: '60px', marginTop:"20px" }}>
     <Text fontWeight="bold" mb={4} color="teal.500" fontFamily="cursive" fontSize="50px" p={"50px"}> 
        Popular Places To Visit      
        </Text>
      <div style={{ width: '100%', height: '20%', marginBottom: '8px' }}>
        <Flex
          direction={['column', 'row']}
          justify="space-between"
          align="center"
          style={{ borderRadius: '5px', marginBottom: '0px', marginLeft: '160px', marginRight: '80px', gap: "5%" }}
        >
          <Box w={['100%', '60%']} mb={[2, 0]} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' borderRadius="12px">
            <Image
              src='https://etimg.etb2bimg.com/photo/87297706.cms'
              alt='...'
              objectFit='cover'
              w='100%'
              p={4}
              h='30%'
              style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
              isLazy
            />
            <Text textAlign='center' fontSize='xl' fontWeight='bold' mt='2'>
              Australia
            </Text>
          </Box>

          <Box w={['120%', '100%']} mb={[2, 0]} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' borderRadius="12px">
            <Image
              src='https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg'
              alt='...'
              objectFit='cover'
              w='120%'
              p={4}
              h='30%'
              style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
              isLazy
            />
            <Text textAlign='center' fontSize='xl' fontWeight='bold' mt='2'>
              Japan
            </Text>
          </Box>

          <Box w={['100%', '60%']} mb={[2, 0]} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' borderRadius="12px">
            <Image
              src='https://www.state.gov/wp-content/uploads/2023/07/shutterstock_433413835v2.jpg'
              alt='...'
              objectFit='cover'
              w='100%'
              p={4}
              h='30%'
              style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
              isLazy
            />
            <Text textAlign='center' fontSize='xl' fontWeight='bold' mt='2'>
              Italy
            </Text>
          </Box>
        </Flex>
      </div>
    </div>
  );
};

export default PopularPlaces;
