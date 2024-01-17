import React from "react";
import { Link, useNavigate } from "react-router-dom";



////formapping the cardcomponent
export const SingleDesti = ({ tour }) => {
  const navigate = useNavigate();

  const handleDetailsPage = () => {
    navigate(`/singledestination/${tour.id}`);
  };
  return (
    <div data-cy="tour-card" className="tour-card">
      <img src={tour.image} alt="img" width="200px" />
      <h2 data-cy="tour-name">{tour.location}</h2>
      <p data-cy="tour-description">{tour.country}</p>
      <h4 data-cy="tour-cost" style={{ margin: "0" }}>
        Trip cost per Head (INR): {tour.price}
      </h4>
      
      <button data-cy="view-details-btn" onClick={handleDetailsPage}>
        View Details
      </button>
    </div>
  );
};













