import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Box, Text, Flex } from '@chakra-ui/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const carouselData = [
    {
      image: 'https://img.freepik.com/free-photo/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise_335224-794.jpg?size=626&ext=jpg&ga=GA1.1.640352663.1687433480&semt=sph',
      title: 'Mountain Sunrise',
      description: `
        Witness the awe-inspiring sunrise amidst misty mountains, where hot air balloons gently rise into the morning sky. 
        Embrace the tranquility of nature's beauty as the sun casts its warm hues on the picturesque landscape. 
        This destination invites you to embark on a soul-soothing journey that rejuvenates your spirit and creates lasting memories.
        Discover the perfect blend of serenity and adventure in this breathtaking mountain sunrise escapade.
      `,
    },
    {
      image: 'https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg?w=900&t=st=1705412189~exp=1705412789~hmac=0be0fb360f9cfedc898190bad78ee70dfc457e1a92a937d2b134f31db1f694b8',
      title: 'Lake Serenity',
      description: `
        Immerse yourself in the serenity of a tranquil lake surrounded by lush mountains. 
        A beautiful girl stands on a boat, contemplating the breathtaking landscape of Ratchaprapha Dam in Khao Sok National Park, Thailand. 
        Experience the peacefulness of the water and the vibrant greenery that creates a perfect escape from the hustle and bustle of everyday life.
        Let the beauty of nature captivate your senses in this serene destination by the lakeside.
      `,
    },
    {
      image: 'https://img.freepik.com/free-photo/hiker-going-up-aiguille-du-midi_53876-139593.jpg?w=900&t=st=1705412220~exp=1705412820~hmac=0c695ab03f29e1de550239a8ee0e7737e85c6d681dc81fd43a62a7a80cc9fe40',
      title: 'Mountain Hiking',
      description: `
        Embark on a thrilling hiking adventure up Aiguille du Midi in the French Alps. 
        As a hiker ascends the rocky path, breathtaking vistas of snow-capped peaks and majestic landscapes unfold.
        Feel the adrenaline rush as you navigate challenging terrains and reach new heights.
        This destination is a haven for adventure seekers, offering an unforgettable experience of conquering the peaks.
      `,
    },
    {
      image: 'https://img.freepik.com/premium-photo/young-girl-travels-high-mountain-vang-vieng-laos_46740-747.jpg?w=900',
      title: 'High Mountain Vista',
      description: `
        Explore the high mountain vistas and lush landscapes of Vang Vieng, Laos. 
        A young girl stands in awe of the breathtaking scenery surrounding her.
        Traverse through scenic trails, encounter local culture, and absorb the peaceful ambiance of the high mountains.
        This destination promises a unique blend of adventure and cultural exploration for every traveler.
      `,
    },
    {
      image: 'https://img.freepik.com/premium-photo/travel-world-monuments-concept_117023-14.jpg?w=900',
      title: 'World Monuments',
      description: `
        Immerse yourself in the rich history and culture of world monuments. 
        From ancient wonders to iconic landmarks, this destination encapsulates the essence of global heritage.
        Travel back in time as you explore architectural marvels, learn about diverse cultures, and capture memories that transcend generations.
        Embark on a journey of discovery, where every monument tells a story waiting to be explored.
      `,
    },
  ];

  const nextSlide = () => {
    const nextIndex = (currIndex + 1) % carouselData.length;
    setCurrIndex(nextIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(intervalId);
  }, [currIndex]);

  return (
    <Box p={8} 
    // backgroundImage={'https://img.freepik.com/free-vector/watercolor-mint-background_23-2150241023.jpg'} 
     backgroundImage={'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://img.freepik.com/free-vector/watercolor-mint-background_23-2150241023.jpg")'} 
    borderRadius="lg" boxShadow="xl" textAlign="center" >
      <Text fontWeight="bold" mb={10} color="teal.500" fontFamily="cursive" fontSize="50px" > 
        Explore Our Destinations
      </Text>
      <Carousel
        selectedItem={currIndex}
        onChange={index => setCurrIndex(index)}
        style={{ width: "80%", margin: "0 auto", marginTop: "2rem" }}
      >
        {carouselData.map((data, index) => (
          <Flex key={index} direction={['column', 'row']} alignItems="center" justifyContent="center">
            <Box
              flex="1"
              mr={[0, 4]}
              mb={[4, 0]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <img
                src={data.image}
                alt={data.title}
                style={{ width: '80%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
              />
            </Box>
            <Box flex="1">
              <Box p={4} bg="white" borderRadius="md" boxShadow="md">
                <Text fontSize="lg" fontWeight="bold" mb={2}>
                  {data.title}
                </Text>
                <Text fontSize="md" color="gray.600">
                  {data.description}
                </Text>
              </Box>
            </Box>
          </Flex>
        ))}
      </Carousel>
    </Box>
  );
};

export default ImageCarousel;