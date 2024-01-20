// Destinationcard.js

import React from 'react';
import { Box, Heading, Text, Button, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const SingleDesti = ({ tour }) => {
  const navigate = useNavigate();

  const handleDetailsPage = () => {
    navigate(`/singledestination/${tour.id}`);
  };

  return (
    <Box
      data-cy="tour-card"
      className="tour-card"
      width="250px"
      textAlign="center"
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.4)" // Adjust the shadow color and intensity
      borderRadius="lg"
      overflow="hidden"
      transition="transform 0.2s"
    >
      <Image
        src={tour.image}
        alt="img"
        width="100%"
        height="160px"
        objectFit="cover"
        p={4} // Add padding from all sides
      />

      <Box p={4}>
        <Heading fontSize="xl" data-cy="tour-name">
          {tour.location}
        </Heading>
        <Text data-cy="tour-description">{tour.country}</Text>
        <Text fontSize="sm" data-cy="tour-cost" fontWeight="bold" color="teal.500" mt={2}>
          INR {tour.price}
        </Text>
        <Button
          data-cy="view-details-btn"
          onClick={handleDetailsPage}
          mt={4}
          border="1px solid teal"
          variant="solid"
        >
          View Details
        </Button>
      </Box>
    </Box>
  );
};
