import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

///////////

import {
  Button, Box, Center, Grid, GridItem, border, Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription, CloseButton
} from '@chakra-ui/react';

//////////////////

const url="https://mockserver-3.onrender.com/locations"
const bookingurl="https://mockserver-3.onrender.com/bookings"

const Singledestination = () => {


  const [isAlertVisible, setAlertVisible] = useState(false);
  const handleBookNowClick = () => {
    setAlertVisible(true);
  };

  const handleAlertClose = () => {
    setAlertVisible(false);
  };


//////////////////////////////////////////////



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
          console.log(data);
          setSingleData(data);
          setIsLoading(false);
        } catch (error) {
          console.log("Error", error);
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
          console.log("bookingsuccess")
          navigate("/booking");
        } catch (error) {
          console.log("Error", error);
        }
      };
    
    if (isLoading) {
        return <h3>Loding....</h3>;
      }
    
      if (error) {
        return <h1 className="loading_indicator">Error loading tour details</h1>;
      }
    

      return (
        <>
          <div>

<Grid templateColumns='1fr repeat(2, 1fr)'
        gap={10}
        padding={30}
        alignItems="Center"
        justifyItems="Center"
      >
        <GridItem>
          <Box>
            <img   width={"100%"} height={"100%"} style={{ border: '2px solid black' }} src={singleData.image} alt="" />
          </Box>
        </GridItem>


        <GridItem>
          <Box backgroundColor="grey" p={4}>
            <Grid templateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr']} gap={5}>
              <GridItem justifySelf="center" alignSelf="center" colSpan={3} h="auto" >
                <b>Location:{singleData.location}</b>
              </GridItem>
              <GridItem justifySelf="center" alignSelf="center" colSpan={3} h='auto'>
                <b>Country:{singleData.country}</b>
              </GridItem>
              <GridItem justifySelf="center" alignSelf="center" colSpan={3} h='auto'>
                <b>Description:{singleData.description}</b><p> </p>
              </GridItem>
              <GridItem justifySelf="center" alignSelf="center" colSpan={3} h='auto'>
                <b>Price:{singleData.price}</b>
              </GridItem>
            </Grid>
          </Box>
        </GridItem>


      </Grid>
      <Box><Button onClick={handleBookNowClick} colorScheme='blue' _hover={{ bg: 'blue.800' }}>Add To Booking</Button></Box>
      <br />

      
      {isAlertVisible && (
        <Alert >
          <AlertIcon />
          <Box textAlign="center">
            <AlertTitle>Added!</AlertTitle>
            <AlertDescription>
              Your Favourite  package has been added to Bookings
              <br />Few more steps to Take Off!!!!!
              <br />
              <Button colorScheme='blue' _hover={{ bg: 'blue.800' }} onClick={handleBooking}>Go To Booking</Button>
            </AlertDescription>
          </Box>
          <CloseButton
            alignSelf='flex-start'
            position='relative'
            right={-1}
            top={-1}
            onClick={handleAlertClose}
          />
        </Alert>
      )}
          </div>
        </>
      );
    };
    

export default Singledestination