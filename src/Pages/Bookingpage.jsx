// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchBookingsData } from '../Redux/action';
// import BookingCard from '../Components/BookingCard';

// const Bookingpage = () => {
//     const dispatch = useDispatch();
//     const {isloading,
//         iserror,
//         mybooking} = useSelector((state) => state);
  
//     console.log(isloading, iserror, mybooking);
  
//     useEffect(() => {
//       dispatch(fetchBookingsData());
//     }, [dispatch]);


//     return (
//         <div>
//           {isloading ? (
//            <h3>Loading....</h3>
//           ) : iserror ? (
//             <h1 className="loading_indicator">Error loading booking details</h1>
//           ) : mybooking.length === 0 ? (
//             <h2 data-cy="Empty-Booking-msg">No tours booked yet !</h2>
//           ) : (
//             <div data-cy="tour-bookings" className="tour-list">
//               {mybooking.map((item) => (
//                 <BookingCard key={item.id} booking={item} />
//               ))}
//             </div>
//           )}
//         </div>
//       );
//     };
// export default Bookingpage


import React from 'react'

function Bookingpage() {




  
  return (
    <div>Bookingpage







    </div>
  )
}

export default Bookingpage