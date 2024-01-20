import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBookingData, fetchBookingsData } from '../Redux/action';
import { Box, Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

const Bookingpage = () => {
  const dispatch = useDispatch();
  const { isloading, iserror, mybooking } = useSelector((state) => state)
  console.log(mybooking)


  useEffect(() => {
    dispatch(fetchBookingsData())
  }, [dispatch])



  const handleDeleteBooking = (id) => {
    dispatch(deleteBookingData(id))
  }
const navigate=useNavigate()
const handleNavi=()=>{
  navigate("/payment")
}

  return (
    <div>Bookingpage

      {isloading ? (

        <h3>Loading....</h3>
      ) : iserror ? (
        <h1 >Error loading booking details</h1>
      ) : mybooking.length === 0 ? (
        <h2 >No tours booked yet !</h2>
      ) : (
        <div>
          {mybooking.map((item, index) => (
            <div key={item.id} className="booking-card"
            >
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                style={{
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  backgroundColor: index % 2 === 0 ? '#EDEDED' : '#FFFFFF', // Set your background colors
                }}


              >
                <Image
                  objectFit='cover'
                  maxW={{ base: '100%', sm: '200px' }}
                  src={item.image}
                  alt='Caffe Latte'
                />


                <Stack align="left" justify="center">
                  <CardBody>
                    <Heading size='md'>{item.location}</Heading>


                    <Box py='2'>
                      <Text align="left">{item.country}</Text>
                    </Box>
                    <Box py='2'>
                      <Text align="left">Price(INR):{item.price}</Text>
                    </Box>
                  </CardBody>

                  <CardFooter>
                    <Button onClick={() => handleDeleteBooking(item.id)} variant='solid' colorScheme='blue'>
                      DELETE
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            </div>

          ))}
        </div>
      )}
      <Box>


        <Button colorScheme='blue' _hover={{ bg: 'blue.800' }} onClick={handleNavi} >Proceed to Payment</Button>
      </Box>
    </div>


  )
}

export default Bookingpage