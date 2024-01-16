import React from 'react'
import { GET_DESTINATION_FAILURE, GET_DESTINATION_REQUEST, GET_DESTINATION_SUCCESS } from './actiontype';

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
      return { ...state, isLoading: true };
    case GET_DESTINATION_SUCCESS:
      return { ...state, isLoading: false, destination: action.payload };
    case GET_DESTINATION_FAILURE:
      return { ...state, isLoading: false, isError: true };

   

    default:
      return state;
  }
};

export { reducer };
