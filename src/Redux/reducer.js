import React from 'react'
import { GET_BOOKINGS_DATA_FAILURE, GET_BOOKINGS_DATA_REQUEST, GET_BOOKINGS_DATA_SUCCESS, GET_DESTINATION_FAILURE, GET_DESTINATION_REQUEST, GET_DESTINATION_SUCCESS } from './actiontype';

let initialstate={
    isloading:false,
    iserror:false,
    destination:[],
    mybooking:[],
}


const reducer = (state = initialstate, action) => {
  switch (action.type) {
    // Coffee Data Cases
    case GET_DESTINATION_REQUEST:
      return { ...state, isloading: true };
    case GET_DESTINATION_SUCCESS:
      return { ...state, isloading: false, destination: action.payload };
    case GET_DESTINATION_FAILURE:
      return { ...state, isloading: false, iserror: true };

   
// case GET_BOOKINGS_DATA_REQUEST:
//   return {...state,isloading:true}

// case GET_BOOKINGS_DATA_SUCCESS:
//   return{...state,isloading:false,mybooking:action.payload}

//   case GET_BOOKINGS_DATA_FAILURE:
//     return{...state,isloading:false,iserror:true}



    default:
      return state;
  }
};

export { reducer };
