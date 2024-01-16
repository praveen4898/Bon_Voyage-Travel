import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDestinationData } from '../Redux/action';


const Destination = () => {
    const dispatch=useDispatch();
    const{ isloading,
        iserror,
        destination}=useSelector((state)=>state);
    useEffect(()=>{
      dispatch(fetchDestinationData())
      
    },[])
    console.log(isloading,iserror,destination)
        return (
        <div>
          <h2>Destination Data</h2>
          <div >
            {isloading ? (
              <p>Loading...</p>
            ) : iserror ? (
              <p>Error loading destination data.</p>
            ) : (
                destination.map((desti) => (
                <div  key={desti.id}>
                  <img src={desti.image} alt={desti.title} />
                  <h3>{desti.location}</h3>
                  <p>Price: {desti.price}</p>
                  <button>More Details</button>
                </div>
              ))
            )}
          </div>
        </div>
      );
    }
    

export default Destination