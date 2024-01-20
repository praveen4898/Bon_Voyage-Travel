import React from 'react';
import { Box, Button, Flex, Heading, Link as ChakraLink, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaUserInjured } from "react-icons/fa";

export const Navbar = () => {
    return (
        <Box style={{ backgroundColor:  '#159895 ', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px' }}>
            <Flex maxWidth='container.xl' alignItems='center' justify='space-between'>
                <Box>
                    <Heading size='md' ml="20" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>LOGO</Heading>
                </Box>

                <Flex gap='10' ml="100" style={{ display: 'flex', alignItems: 'center', marginLeft: '10px',fontWeight: 'bold' }}>
                    <ChakraLink as={Link} to="/" style={{ textDecoration: 'none', padding: '10px', color: 'gray.600', transition: 'color 0.3s' }} _hover={{ color: 'white' }}>
                        Home
                    </ChakraLink>
                    <ChakraLink as={Link} to="/destination" style={{ textDecoration: 'none', padding: '10px', color: 'gray.600', transition: 'color 0.3s' }} _hover={{ color: 'white' }}>
                        Destination
                    </ChakraLink>
                    <ChakraLink as={Link} to="/booking" style={{ textDecoration: 'none', padding: '10px', color: 'gray.600', transition: 'color 0.3s' }} _hover={{ color: 'white' }}>
                        Booking
                    </ChakraLink>
                    <ChakraLink as={Link} to="/about" style={{ textDecoration: 'none', padding: '10px', color: 'gray.600', transition: 'color 0.3s' }} _hover={{ color: 'white' }}>
                        About Us
                    </ChakraLink>
                    <ChakraLink as={Link} to="/support" style={{ textDecoration: 'none', padding: '10px', color: 'gray.600', transition: 'color 0.3s' }} _hover={{ color: 'white' }}>
                        Support
                    </ChakraLink>

                    {/* <Stack direction='row' spacing={4} style={{ marginLeft: 'auto', alignItems: 'center' }}> */}
                        <Button leftIcon={<FaUserInjured />} colorScheme='#159895' variant='solid' fontWeight='bold'>
                        SignUp
                        </Button>
                        <Button leftIcon={<FaUserInjured />} colorScheme='gray' variant='solid' mr='-20' fontWeight='bold' >
                           Login
                        </Button>
                  
                </Flex>
            </Flex>
        </Box>
    );
};
