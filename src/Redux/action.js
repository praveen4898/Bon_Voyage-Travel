import axios from "axios";
import { GET_DESTINATION_FAILURE, GET_DESTINATION_REQUEST, GET_DESTINATION_SUCCESS } from "./actiontype";
 
const DestiUrl="https://mockserver-3.onrender.com/locations";

export const fetchDestinationRequest = () => ({
    type:GET_DESTINATION_REQUEST,
  });
  
  export const fetchDestinationSuccess = (desti) => ({
    type: GET_DESTINATION_SUCCESS,
    payload: desti,
  });
  
  export const fetchDestinationFailure = () => ({
    type: GET_DESTINATION_FAILURE,
  });
  

// export const fetchBookingRequest=()=>({
//   type:GET_BOOKINGS_DATA_REQUEST
// })

// export const fetchBookingSucess=()=>({
// type:GET_BOOKINGS_DATA_SUCCESS,
// payload:booking,
// })


// export const fetchBookingFailure=()=>({
//   type:GET_BOOKINGS_DATA_FAILURE,
// })

// Feytching Destination Data
  export const fetchDestinationData = () => {
    return async (dispatch) => {
      dispatch(fetchDestinationRequest());
      try {
        const response = await axios.get(DestiUrl);
        let data =response.data
        console.log(data)
        dispatch(fetchDestinationSuccess(data));
      } catch (error) {
        dispatch(fetchDestinationFailure());
      }
    };
  };

  //fetchingbookingdetails
// export const fetchBookingsData=()=>{
//   return async (dispatch)=>{
//     dispatch(fetchBookingRequest)
//   try {
//     const response=await axios.get(bookingurl);
//     let value=response.value
//     console.log(value)
//     dispatch(fetchBookingSucess(value))
//     let data=response.data

//   } catch (error) {
//   }
// }
// }



// BookingPart

// const fetchBookingRequest= ()=>({type:GET_BOOKINGS_DATA_REQUEST});
// const fetchBookingSucess= (book)=>({type: GET_BOOKINGS_DATA_SUCCESS, payload:book});
// const fetchBookingFailure= ()=>({type:GET_BOOKINGS_DATA_FAILURE});

// export const fetchBookingsData = () => {
//     return async (dispatch) => {
//       dispatch(fetchBookingRequest());
//       try {
//         const response = await axios.get(`${DestiUrl}/booking}`);
//         let data =response.data
//          // console.log(data);
//         dispatch(fetchBookingSucess(data));
//       } catch (error) {
//        console.log("Error", error);
//         dispatch(fetchBookingFailure());
//       }
//     };
//   };