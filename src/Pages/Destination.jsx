// Destination.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDestinationData } from '../Redux/action';
import { SingleDesti } from './Destinationcard';
import { Box, Button, Select, HStack, Center } from '@chakra-ui/react';

const Destination = ({ searchInput }) => {
  const dispatch = useDispatch();
  const { isloading, iserror, destination } = useSelector((state) => state);
  const [filteredTours, setFilteredTours] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; 
  const [sortOrder, setSortOrder] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    dispatch(fetchDestinationData());
  }, [dispatch]);

  useEffect(() => {
    setFilteredTours(destination);
  }, [destination]);

  useEffect(() => {
    let sortedTours = [...filteredTours];

    if (sortOrder === 'asc' || sortOrder === 'desc') {
      sortedTours = sortedTours.sort((a, b) => {
        const costA = a.price;
        const costB = b.price;
        return sortOrder === 'asc' ? costA - costB : costB - costA;
      });
    }

    if (selectedCountry) {
      const filtered = sortedTours.filter((tour) => {
        const countryValue = tour.country.toLowerCase();
        return countryValue.includes(selectedCountry.toLowerCase());
      });
      setFilteredTours(filtered);
    } else {
      setFilteredTours(sortedTours);
    }
  }, [filteredTours, sortOrder, selectedCountry]);

  useEffect(() => {
   
    if (searchInput) {
      const filtered = destination.filter((tour) => {
        
        return tour.country.toLowerCase().includes(searchInput.toLowerCase());
      });
      setFilteredTours(filtered);
    }
  }, [searchInput, destination]);


  useEffect(() => {
    setSelectedCountry('');
  }, [searchInput]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTours.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const getUniqueCountries = () => {
    const uniqueCountries = [...new Set(destination.map((tour) => tour.country))];
    return uniqueCountries;
  };

  return (
    <Box>
      <Box>
        {isloading ? (
          <p>Loading...</p>
        ) : iserror ? (
          <p>Error loading destination data.</p>
        ) : (
          <Box>
            <Center>
              <HStack spacing={4} mt={4}>
                <Select
                  border="1px solid teal"
                  placeholder="Sort by cost"
                  onChange={(e) => setSortOrder(e.target.value)}
                  value={sortOrder}
                >
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </Select>

                <Select
                  border="1px solid teal"
                  placeholder="Filter by country"
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  value={selectedCountry}
                >
                  <option value="">All Countries</option>
                  {getUniqueCountries().map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </Select>
              </HStack>
            </Center>

            <Box data-cy="tour-list" className="tour-list" mt="10" style={{ marginLeft: '90px' }}>
              <Box
                style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', justifyContent: 'center' }}
              >
                {currentItems.map((item) => (
                  <SingleDesti key={item.id} tour={item} />
                ))}
              </Box>

              <Center mt={4}>
                <HStack spacing={4} mt={3} mb={3}>
                  <Button onClick={prevPage} disabled={currentPage === 1} border="1px solid teal" colorScheme="teal">
                    Previous
                  </Button>
                  <Button
                    onClick={nextPage}
                    disabled={indexOfLastItem >= filteredTours.length}
                    border="1px solid teal"
                    colorScheme="teal"
                  >
                    Next
                  </Button>
                </HStack>
              </Center>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Destination;
