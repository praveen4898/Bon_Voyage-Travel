import { Box } from '@chakra-ui/react';
import React from 'react';
import backgroundImage from '../Image/homeBG.jpg';

import ImageCarousel from '../Components/Carousel';

const Homepage = () => {
  return (
    <Box>
      <Box
        className='home'
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          height: '95vh',
        }}
      ></Box>
      <Box>
        <ImageCarousel />
      </Box>
    </Box>
  );
};

export default Homepage;
