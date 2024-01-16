// import React, { useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom';

// const Singlepackage = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [isLoading, setIsLoading] = useState(true);
//     const [singleData, setSingleData] = useState(null);
//     const [error, setError] = useState(null);
  
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const res = await axios.get(`${url}/${id}`);
//           const data = res.data;
//           console.log(data);
//           setSingleData(data);
//           setIsLoading(false);
//         } catch (error) {
//           console.log("Error", error);
//           setError(error);
//           setIsLoading(false);
//         }
//       };
  
//       fetchData();
//     }, [id]);

//     const handleBooking = async () => {
//         try {
//           await axios.post(`${DestiUrl}/booking}`, {
//             location: singleData.location,
//             description: singleData.description,
//             image: singleData.image,
//             price: singleData.price,
//             ID: singleData.id,
//           });
//           navigate("/");
//         } catch (error) {
//           console.log("Error", error);
//         }
//       };
    
//     if (isLoading) {
//         return <h3>Loding....</h3>;
//       }
    
//       if (error) {
//         return <h1 className="loading_indicator">Error loading tour details</h1>;
//       }
    

//       return (
//         <>
//           <div data-cy="tour-details" className="singleCard">
//             <img data-cy="tour-details-image" src={singleData.image} alt="Tour" />
//             <h3 data-cy="tour-details-title">Location: {singleData.location}</h3>
//             <h4 data-cy="tour-cost">Country: {singleData.country}</h4>
//             <p data-cy="tour-details">{singleData.description}</p>
//             <h4 data-cy="tour-cost">Price: {singleData.price}</h4>
    
//             <div>
//               <button data-cy="tour-booking-button" onClick={handleBooking}>
//                 Book Now
//               </button>
//             </div>
//           </div>
//         </>
//       );
//     };
    

// export default Singlepackage

// import React from 'react'

const Singlepackage = () => {
  return (
    <div>Singlepackage</div>
  )
}

export default Singlepackage