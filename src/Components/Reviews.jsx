
import React from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  Avatar,
  IconButton,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@chakra-ui/react';
import { StarIcon} from '@chakra-ui/icons'




const Reviews = () => {
  // Dummy data for reviews
  const reviewsData = [
    {
      name: 'Segun Adebayo',
      face: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa8E9JAFGgCfv03On7CQWLLqR0sKlMAoEkA&usqp=CAU',
      country: 'Brazil',
      imageUrl: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      review: 'Our journey with Bon Voyage through Japan was nothing short of magical. The blend of tradition and modernity in their recommendations truly captured the essence of Japan.',
    },
    {
      name: 'Isabella Rodriguez',
      face: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_mN2dGaalYd_XOENdV_KExttnWdnHb0PTBw&usqp=CAU',
      country: 'Spain',
      imageUrl: 'https://images.pexels.com/photos/227517/pexels-photo-227517.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4,
      review: 'Bon Voyage made our trip to Italy unforgettable! From the iconic landmarks of Rome to the charming canals of Venice, every moment was curated for an exceptional experience. Grazie mille, Bon Voyage!',
    },
    {
      name: 'Olivier Dubois',
      face: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgCywR-DWgY8ZKqbO8RQWll1QxWTP2OeHZZQ&usqp=CAU',
      country: 'France',
      imageUrl: 'https://images.pexels.com/photos/1291766/pexels-photo-1291766.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      review: 'Bon Voyage orchestrated a dreamy escapade through the picturesque landscapes of Switzerland. The seamless logistics and warm hospitality made our Swiss adventure truly enchanting. Danke, Bon Voyage!',
    },
    {
      name: 'Mateo Silva',
      face: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCHqHivBKsgDmdPO-1PvbKsk8jCjtTF_z0Og&usqp=CAU',
      country: 'Portugal',
      imageUrl: 'https://images.pexels.com/photos/4007642/pexels-photo-4007642.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4,
      review: 'Bon Voyage made our trip to Malaysia an exploration of cultural richness and natural beauty. Their commitment to delivering a memorable travel experience was evident in every detail. Terima kasih, Bon Voyage!',
    },
    {
      name: 'Sophie Anderson',
      face: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCHqHivBKsgDmdPO-1PvbKsk8jCjtTF_z0Og&usqp=CAU',
      country: 'United Kingdom',
      imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/53/7b/0f/photo0jpg.jpg?w=1200&h=-1&s=1',
      rating: 5,
      review: 'Our journey with Bon Voyage through the United Kingdom was fantastic. From the historic sites of London to the picturesque landscapes of Scotland, every moment was delightful. Cheers, Bon Voyage!',
    },
    {
      name: 'Carlos Hernandez',
      face: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCHqHivBKsgDmdPO-1PvbKsk8jCjtTF_z0Og&usqp=CAU',
      country: 'Mexico',
      imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/f5/ab/76/photo1jpg.jpg?w=1200&h=-1&s=1',
      rating: 4,
      review: 'Bon Voyage provided us with an incredible journey through Mexico. The vibrant culture, delicious cuisine, and beautiful beaches made our trip unforgettable. Gracias, Bon Voyage!',
    },
  ];
  
  

  return (
    <Box mx="auto" maxW="1200px" mb="5" px="4">
     <Text fontWeight="bold" mb={4} color="teal.500" fontFamily="cursive" fontSize="50px" p={"50px"}> 
        Testimonials
        </Text>
    <SimpleGrid gridTemplateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}}
                style={{ display: 'grid'  , gap: '16px', justifyContent: 'center' }}>
      {reviewsData.map((review, index) => (
        <Card
          key={index}
          // maxW="sm"
          width="350px"
          // height="300px"
          borderRadius="20px" 
          // columnGap={"-5px"}
          // w={"300px"}
          boxShadow="0 4px 8px rgba(0, 0, 0, 0.4)"
          mx="auto" // Center the card
          // maxH="sm"
        >
          <CardHeader maxH="120px">
            <Box>
              <Avatar name={review.name} src={review.face} />
              <Heading size="sm">{review.name}</Heading>
              <Text>{review.country}</Text>
              <Box>  
              {[...Array(review.rating)].map((_, i) => (
                    <StarIcon key={i} color="yellow.500" />
                  ))}
</Box>

            </Box>
          </CardHeader>
          <CardBody>
            <Text>{review.review}</Text>
          </CardBody>
          <Image
            objectFit="cover"
            src={review.imageUrl}
            alt="Chakra UI"
            height="150px"
            borderRadius={"20px"}
            p={2}
          />
          <CardFooter
            justify="space-between"
            flexWrap="wrap"
            sx={{
              '& > button': {
                minW: '136px',
              },
            }}
          ></CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  </Box>
);
};

export default Reviews;

