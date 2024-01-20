
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Button,
  Box,
  Flex,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';
import coverimage from '../Image/option1.jpg'
import FooterSection from '../Components/Footer';


const url = "https://mockserver-3.onrender.com/locations";
const bookingurl = "https://mockserver-3.onrender.com/bookings";

const Singledestination = () => {
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [timer, setTimer] = useState(60 * 60); // 60 minutes in seconds

  const handleBookNowClick = () => {
    setAlertVisible(true);
  };

  const handleAlertClose = () => {
    setAlertVisible(false);
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [singleData, setSingleData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${url}/${id}`);
        const data = res.data;
        setSingleData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleBooking = async () => {
    try {
      await axios.post(bookingurl, {
        location: singleData.location,
        description: singleData.description,
        image: singleData.image,
        price: singleData.price,
        ID: singleData.id,
      });
      navigate("/booking");
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    // Start the timer countdown
    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timerInterval);
  }, []);

  if (isLoading) {
    return <h3>Loading....</h3>;
  }

  if (error) {
    return <h1>Error loading tour details</h1>;
  }

  return (


    <Box
    position="relative"
      minHeight="100vh"
      background={`linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${singleData.image})`}
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    
    >

    <Box
      maxWidth="800px"
      margin="auto"
      padding="20px"
      boxShadow="lg"
      borderRadius="md"
      marginTop="50px"
      marginBottom="50px"
      backgroundColor="gray.100" // Set the background color for the entire box
    >
      <Flex direction={['column', 'row']} align="center">
        <Box width={['100%', '50%']} pr={[0, 4]}>
          <Image
            width="100%"
            height="100%"
            src={singleData.image}
            alt=""
          />
        </Box>

        <Box width={['100%', '50%']} p={4} borderRadius="md">
          <Heading mb={2} size="lg">
            {singleData.location}
          </Heading>
          <Text fontSize="sm" color="gray.500" mb={4}>
            {singleData.country}
          </Text>
          <Text>{singleData.description}</Text>
          <Text mt={4} fontWeight="bold">
            Price: {singleData.price}
          </Text>
        </Box>
      </Flex>

      <Box mt={4} textAlign="center">
        <Text mt={2} mb={4}> {/* Add margin-bottom to create space between text and button */}
          {timer > 0 ? (
            `Book now and get 15% off! (Offer ends in ${Math.floor(timer / 60)}:${timer % 60} minutes)`
          ) : (
            'Book now and get 15% off!'
          )}
        </Text>
        <Button
          onClick={handleBookNowClick}
          colorScheme='blue'
          _hover={{ bg: 'blue.800' }}
          mt={2} // Add margin-top to create space between text and button
        >
          Add To Booking
        </Button>
      </Box>

      {isAlertVisible && (
        <Alert mt={6}>
          <AlertIcon />
          <Box textAlign="center">
            <AlertTitle>Added!</AlertTitle>
            <AlertDescription>
              Your favorite package has been added to Bookings
              <br />Few more steps to take off!
            </AlertDescription>
            <Box>
            <Button
              colorScheme='blue'
              _hover={{ bg: 'blue.800' }}
              onClick={handleBooking}
              mt={4}
            >
              Go To Booking
            </Button>
            </Box>
          </Box>
          <CloseButton
            alignSelf='flex-start'
            position='relative'
            right={-2}
            top={-2}
            onClick={handleAlertClose}
          />
        </Alert>
      )}
    </Box>
    
    </Box>
    

    
  );
  
};

export default Singledestination;