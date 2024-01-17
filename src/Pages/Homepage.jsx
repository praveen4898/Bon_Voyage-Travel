import { Box, background } from '@chakra-ui/react'
import React from 'react'
import backgroundImage from '../Image/homeBG.jpg';

const Homepage = () => {
  return (
    <Box className='home'  style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
      
        height: '95vh',
       
        
      }}>
    
    </Box>
  )
}

export default Homepage