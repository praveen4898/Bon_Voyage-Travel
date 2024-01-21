<<<<<<< HEAD
import React from "react";
import {
  GET_BOOKINGS_DATA_FAILURE,
  GET_BOOKINGS_DATA_REQUEST,
  GET_BOOKINGS_DATA_SUCCESS,
  GET_DESTINATION_FAILURE,
  GET_DESTINATION_REQUEST,
  GET_DESTINATION_SUCCESS,
  DELETE_BOOKINGS_DATA_REQUEST,
  DELETE_BOOKINGS_DATA_FAILURE,
  DELETE_BOOKINGS_DATA_SUCCESS,
} from "./actiontype";
=======
import React from 'react'
import { GET_BOOKINGS_DATA_FAILURE, GET_BOOKINGS_DATA_REQUEST, GET_BOOKINGS_DATA_SUCCESS, 
  GET_DESTINATION_FAILURE, GET_DESTINATION_REQUEST, GET_DESTINATION_SUCCESS,DELETE_BOOKINGS_DATA_REQUEST,DELETE_BOOKINGS_DATA_FAILURE,DELETE_BOOKINGS_DATA_SUCCESS, REGISTER_REQUEST, REGISTER_FAILURE, REGISTER_SUCCESS } from './actiontype';

let initialstate={
    isloading:false,
    iserror:false,
    destination:[],
    mybooking:[],
    users:[]
}
>>>>>>> 0c9f62f97de47e0980c84f30c89210ab1fb84fee

let initialstate = {
  isloading: false,
  iserror: false,
  destination: [],
  mybooking: [],
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    // Coffee Data Cases
    case GET_DESTINATION_REQUEST:
      return { ...state, isloading: true };
    case GET_DESTINATION_SUCCESS:
      return { ...state, isloading: false, destination: action.payload };
    case GET_DESTINATION_FAILURE:
      return { ...state, isloading: false, iserror: true };

<<<<<<< HEAD
    /////satmrngpraveenchanges
    case GET_BOOKINGS_DATA_REQUEST:
      return { ...state, isloading: true };
=======
  
/////satmrngpraveenchanges
      case GET_BOOKINGS_DATA_REQUEST || REGISTER_REQUEST:
        return {...state,isloading:true}
      
      case GET_BOOKINGS_DATA_SUCCESS:
        return{...state,isloading:false,mybooking:action.payload}
      
        case GET_BOOKINGS_DATA_FAILURE || REGISTER_FAILURE:
          return{...state,isloading:false,iserror:true}
      
        case REGISTER_SUCCESS:
          return{...state,isloading:false,isloading:false,users:[...state.users,action.payload]}



          case DELETE_BOOKINGS_DATA_REQUEST:
            return {...state,isloading:true}
          
          case DELETE_BOOKINGS_DATA_SUCCESS:
            const updatedbooking=state.mybooking.filter((booking)=>booking.id!=action.payload)
            return{...state,isloading:false,mybooking:updatedbooking,iserror:false}
          
            case DELETE_BOOKINGS_DATA_FAILURE:
              return{...state,isloading:false,iserror:true}
>>>>>>> 0c9f62f97de47e0980c84f30c89210ab1fb84fee

    case GET_BOOKINGS_DATA_SUCCESS:
      return { ...state, isloading: false, mybooking: action.payload };

    case GET_BOOKINGS_DATA_FAILURE:
      return { ...state, isloading: false, iserror: true };

    case DELETE_BOOKINGS_DATA_REQUEST:
      return { ...state, isloading: true };

    case DELETE_BOOKINGS_DATA_SUCCESS:
      const updatedbooking = state.mybooking.filter(
        (booking) => booking.id != action.payload
      );
      return {
        ...state,
        isloading: false,
        mybooking: updatedbooking,
        iserror: false,
      };

    case DELETE_BOOKINGS_DATA_FAILURE:
      return { ...state, isloading: false, iserror: true };

      




    default:
      return state;
  }
};

export { reducer };
