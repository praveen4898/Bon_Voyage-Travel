import { GiHamburgerMenu } from "react-icons/gi";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,

  
    Button,
    Link ,
    useDisclosure,
    Flex,
    Spacer,

  } from '@chakra-ui/react';

  

  import React from 'react';
  
  export const SideDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const handleLogout=()=>{
        console.log("logout");
    }
   
    return (
        <>
        <Button  position={'absolute'} left={'1%'} colorScheme='blue' onClick={onOpen}>
        <GiHamburgerMenu />
        </Button>
        <Drawer placement={'left'} 
        onClose={onClose} 
        isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px' fontSize={'xxx-large'} fontWeight={'bolder'}>Navigation</DrawerHeader>
            {/* <DrawerCloseButton /> */}
            <DrawerBody>
                <Flex direction={'column'}  textAlign={'center'}  m={'auto'} gap={'50px'}>              
                 
            <Button 
            colorScheme='red' 
            variant='solid' 
            onClick={handleLogout}>Logout</Button>
                </Flex>
            </DrawerBody>
            <DrawerFooter>
                Admin Dashboard
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }



  