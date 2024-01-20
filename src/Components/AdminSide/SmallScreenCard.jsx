import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,Image,Stack,Heading,Text,Divider,Button,Flex } from '@chakra-ui/react'
const SmallScreenCard = ({prop}) => {
  return (
    <div><Card maxW='sm'>
    <CardBody>
      <Image
        src='image'
        alt='image'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>country</Heading>
        <Heading size='md'>location</Heading>
        
        <Text>
         description
        </Text>
        <Text color='blue.600' fontSize='2xl'>
         price
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
       
        <Button  width='100%' variant='solid' colorScheme='red'>
         Delete
        </Button>
       
    </CardFooter>
  </Card></div>
  )
}

export default SmallScreenCard


