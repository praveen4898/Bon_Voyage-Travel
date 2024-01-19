import { Card, CardBody, CardFooter, CardHeader, Grid, Heading, Image, SimpleGrid,  Text } from '@chakra-ui/react';
import React from 'react'

const PopularPlaces = () => {
  return (
    <div>
      <h1 style={{color:"black", fontSize:"30px" }}>POPULAR PLACES TO VISIT</h1>
      <Grid 
    // h='200px'
    // templateRows='repeat(1, 1fr)'
    // templateColumns='repeat(3, 1fr)'
    // gap={4}
      >
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
  <Card>
    <CardHeader>
    <Image
  borderRadius='full'
  boxSize='150px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
/>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem repellendus commodi porro ipsa laborum dignissimos libero rerum! Libero, delectus esse.</Text>
    </CardBody>
    <CardFooter>
      {/* <Button>View here</Button> */}
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
    <Image
  borderRadius='full'
  boxSize='150px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
/>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quaerat quo tenetur non officia voluptatem enim eaque. Hic, obcaecati pariatur!</Text>
    </CardBody>
    <CardFooter>
      {/* <Button>View here</Button> */}
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
    <Image
  borderRadius='full'
  boxSize='150px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
/>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate veniam at eius eveniet adipisci nesciunt accusantium sapiente quia natus eaque?</Text>
    </CardBody>
    <CardFooter>
      {/* <Button>View here</Button> */}
    </CardFooter>
  </Card>
</SimpleGrid>
</Grid>
    </div>
  )
}

export default PopularPlaces;