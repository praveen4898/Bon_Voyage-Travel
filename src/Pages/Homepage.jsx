
import { Box, background } from '@chakra-ui/react'
import React from 'react'
import backgroundImage from '../Image/homeBG.jpg';
import React from 'react'
import ImageCarousel from '../Components/Carousel'
const Homepage = () => {
  return (
    <Box className='home'  style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
      
        height: '95vh',
       
        
      }}>
    
    </Box>

const Homepage = () => {
  return (
    <div>
        <ImageCarousel />

    </div>

  )
}

export default Homepage