import { Box } from '@chakra-ui/react';
import React from 'react';

import ImageCarousel from '../Components/Carousel';
import { FooterSection } from '../Components/Footer';
import PopularPlaces from '../Components/PopularPlaces';

import FirstDiv from '../Components/FirstDiv';
import Reviews from '../Components/Reviews';



const Homepage = () => {
  return (
    <Box>
      <Box>
        <FirstDiv />
      </Box>
      <Box>
        <PopularPlaces />
      </Box>
      {/* <Box>
       < AboutUs />
      </Box> */}
      <Box>
        <ImageCarousel />
      </Box>
     <Box>
      <Reviews />
     </Box>
    </Box>
  );
};

export default Homepage;
