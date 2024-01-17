
import React from 'react';
import { Box, Button, Flex, Heading, Link as ChakraLink , Stack} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaUserInjured } from "react-icons/fa";




export const Navbar = () => {
    return (
        <Box >
            <Flex maxWidth='container.xl' alignItems='center' justify='space-between'>
                <Box ml='40'>
                    <Heading size='md' >LOGO</Heading>
                </Box>
                <Box ml='90'>
                <Flex gap='20'>
                    <ChakraLink as={Link} to="/" className="menuList" color='gray.600' _hover={{ color: 'teal.500' }}>
                        Home
                    </ChakraLink>
                    <ChakraLink as={Link} to="/destination" className="menuList" color='gray.600' _hover={{ color: 'teal.500' }}>
                        Destination
                    </ChakraLink>
                    <ChakraLink as={Link} to="/booking" className="menuList" color='gray.600' _hover={{ color: 'teal.500' }}>
                        Booking
                    </ChakraLink>
                    <ChakraLink as={Link} to="/about" className="menuList" color='gray.600' _hover={{ color: 'teal.500' }}>
                        About Us
                    </ChakraLink>
                    <ChakraLink as={Link} to="/support" className="menuList" color='gray.600' _hover={{ color: 'teal.500' }}>
                        Support
                    </ChakraLink>
                </Flex>
                </Box>
                <Box >
                <Stack direction='row' spacing={4} pl='30' gap='20'>
                    <Button leftIcon={<FaUserInjured />} colorScheme='gray' variant='solid'  >
                       Login
                    </Button>
                    <Button leftIcon={<FaUserInjured />} colorScheme='gray' variant='solid'  >
                       SignUp
                    </Button>
                    
                </Stack>
                </Box>
              
            </Flex>
        </Box>
    );
};


