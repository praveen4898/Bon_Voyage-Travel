import axios from "axios";
import { LOGIN_SUCCESS, GET_DESTINATION_FAILURE, GET_DESTINATION_REQUEST, GET_DESTINATION_SUCCESS,GET_BOOKINGS_DATA_REQUEST,GET_BOOKINGS_DATA_SUCCESS,
GET_BOOKINGS_DATA_FAILURE,DELETE_BOOKINGS_DATA_FAILURE,DELETE_BOOKINGS_DATA_SUCCESS,DELETE_BOOKINGS_DATA_REQUEST, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_REQUEST, LOGIN_FAILURE } from "./actiontype";
 
const DestiUrl="https://mockserver-3.onrender.com/locations";
const bookingUrl = "https://mockserver-3.onrender.com/bookings";


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








////praveenchangessatmrng

export const fetchBookingRequest = () => ({
  type: GET_BOOKINGS_DATA_REQUEST
})

export const fetchBookingSucess = (mybooking) => ({
  type: GET_BOOKINGS_DATA_SUCCESS,
  payload: mybooking
})


export const fetchBookingFailure = () => ({
  type: GET_BOOKINGS_DATA_FAILURE,
})



export const deleteBookingRequest = () => ({
  type: DELETE_BOOKINGS_DATA_REQUEST
})

export const deleteBookingSuccess = (mybooking) => ({
  type: DELETE_BOOKINGS_DATA_SUCCESS,
  payload: mybooking
})


export const deleteBookingFailure = () => ({
  type: DELETE_BOOKINGS_DATA_FAILURE,
})



export const fetchBookingsData = (mybooking) => {
  return async (dispatch) => {
    dispatch(fetchBookingRequest())
    try {
      const res = await axios.get(bookingUrl);
      let value = res.data
      console.log(value)
      dispatch(fetchBookingSucess(value))

    } catch (error) {
      console.log("Error", error);
      dispatch(fetchBookingFailure());
    }
  }
}


export const deleteBookingData = (id) => {
  return async (dispatch) => {
    dispatch(deleteBookingRequest())
    try {
      const res = await axios.delete(`https://mockserver-3.onrender.com/bookings/${id}`)
      dispatch(deleteBookingSuccess(id))
    } catch (error) {
      dispatch(deleteBookingFailure())
    }
  }
}




export const registerUser=(formData)=>(dispatch)=>{
  dispatch({type:REGISTER_REQUEST})
  axios.post('https://mockserver-3.onrender.com/users',formData)
  .then((res)=>{
    console.log(res.data)
    dispatch({type:REGISTER_SUCCESS,payload:res.data})
  })
  .catch(error=>{

    console.log(error)
    dispatch({type:REGISTER_FAILURE,})
  })
}








export const loginUser=(formData)=>(dispatch)=>{
  return new Promise((resolve,reject)=>{

 
  dispatch({type:LOGIN_REQUEST})
  axios.get('https://mockserver-3.onrender.com/users')
  .then((res)=>{
    console.log(res.data)
  let allow=res.data.find((el)=>
el.email==formData.email && el.password==formData.password 
  )
console.log(allow)

if(allow){
  resolve (true)
}
else{
  alert("Invalid Credentials,Please Check the credentials")
}
    // dispatch({type:LOGIN_SUCCESS,payload:res.data})
  })
  .catch(error=>{
    resolve (false)

    console.log(error)
    dispatch({type:LOGIN_FAILURE,})
  })
})
}