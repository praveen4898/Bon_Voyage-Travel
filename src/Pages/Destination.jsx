import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDestinationData } from '../Redux/action';
import  { SingleDesti } from './Destinationcard';

const Destination = () => {
  const dispatch = useDispatch();
  const { isloading, iserror, destination } = useSelector((state) => state);
  const [filteredTours, setFilteredTours] = useState([]);

  useEffect(() => {
    dispatch(fetchDestinationData());
  }, [dispatch]);

  useEffect(() => {
    setFilteredTours(destination);
  }, [destination]);

  const handleSortChange = (e) => {
    const order = e.target.value;
    sortTours(order);
  };

  const handleFilterChange = (e) => {
    const selectedSeason = e.target.value;
    filterTours(selectedSeason);
  };

  const sortTours = (order) => {
    const sortedTours = [...filteredTours].sort((a, b) => {
      const costA = a.tripCostINR;
      const costB = b.tripCostINR;
      return order === 'asc' ? costA - costB : costB - costA;
    });

    setFilteredTours(sortedTours);
  };

  const filterTours = (selectedSeason) => {
    const filtered = destination.filter((tour) => {
      const seasons = tour.best_time_to_visit;
      return seasons.indexOf(selectedSeason) !== -1;
    });

    setFilteredTours(filtered);
  };

  return (
    <div>
      <h2>Destination Data</h2>
      {isloading ? (
        <p>Loading...</p>
      ) : iserror ? (
        <p>Error loading destination data.</p>
      ) : (
        <div>
          <div id="sortFilter">
            <select name="sort" id="sort" onChange={handleSortChange}>
              <option value="">Sort by cost</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
            <select name="filter" id="filter" onChange={handleFilterChange}>
              <option value="">Filter by best time to visit</option>
              <option value="Summer">Summer</option>
              <option value="Spring">Spring</option>
              <option value="Fall">Fall</option>
              <option value="Autumn">Autumn</option>
              <option value="Winter">Winter</option>
              <option value="Monsoon">Monsoon</option>
            </select>
          </div>

          <div data-cy="tour-list" className="tour-list">
            {filteredTours.map((item) => (
              <SingleDesti key={item.id} tour={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Destination;
