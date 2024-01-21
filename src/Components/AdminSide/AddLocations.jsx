import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    Input,
    FormLabel,
    Flex,
    Textarea ,
    useToast,
  } from '@chakra-ui/react'
import axios from 'axios'
async function postLocations(cred){
  try {
     let res= await axios.post("https://mockserver-3.onrender.com/locations",cred);

 } catch (error) {
     console.log(error)
 }
}

const AddLocations = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    const [price,setPrice]=useState('');
    const [location,setLocation]=useState("");
    const [country,setCountry]=useState("");
    const [image,setImg]=useState("");
    const [description,setDesc]=useState("");

    const toast = useToast()

    const handleSubmit=()=>{
      
        postLocations({image,location,country,price,description})
        console.log("data added sucessfully");

        toast({
          title: 'Location Added',
          description: "We've added new location",
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top-center',
        })
        onClose()
      }

  return (
    
    <>
     <Flex direction={'column'}>
        <Button colorScheme='green' onClick={onOpen}>Add Locations</Button>
    </Flex>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={'xl'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Locations</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Country</FormLabel>
              <Input ref={initialRef} 
              placeholder='Country' 
              onChange={(e)=>setCountry(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Location</FormLabel>
              <Input placeholder='Location' 
              onChange={(e)=>setLocation(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Image</FormLabel>
              <Input placeholder='Image' 
              onChange={(e)=>setImg(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input placeholder='Price' 
              type='number'
              onChange={(e)=>setPrice(e.target.value)}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea  
              placeholder='Description about the Location' 
              onChange={(e)=>setDesc(e.target.value)}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}
            onClick={handleSubmit}
            
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

   
  )
}

export default AddLocations;