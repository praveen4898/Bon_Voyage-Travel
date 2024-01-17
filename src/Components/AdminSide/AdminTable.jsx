import React, { useEffect, useMemo, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Image ,
    Button,
  } from '@chakra-ui/react'
import axios from 'axios';


  // const dynamicSort = (key, order='asc') => (a, b) => {
  //   const aValue = a[key];
  //   const bValue = b[key];

  //   if (aValue < bValue) return order === 'asc' ? -1 : 1;
  //   if (aValue > bValue) return order === 'asc' ? 1 : -1;
  //   return 0;
  // };

  async function DeleteLocation(id){
    try {
        let res= await axios.delete(`https://mockserver-3.onrender.com/locations/${id}`);
        
        console.log(res.data)
        console.log(id)
    } catch (error) {
        console.log(error)
    }
}

export const AdminTable = ({props}) => {
  const [data,setData]=useState([]);
 
  useEffect(()=>{
    setData(props)
   },[props])



// const sortedArray=[...data].sort(dynamicSort(data.country,'asc'));
// console.log('sortedArray',sortedArray)

// const sortedByLocation=data.sort((a,b)=>{return (b.location).localeCompare(a.location)});


// console.log(data)
// 
// const sortedById=useMemo(()=>{return props.sort((a,b)=> b.id-a.id)},[]);
// const sortedByLocation=useMemo(()=>{return props.sort((a,b)=>{return b.location-a.location})},[]);

// const sortedByPrice=useMemo(()=>{return props.sort((a,b)=>{return b.price-a.price})},[]);
//  const sortedByCounrty=(data)=>data.sort((a,b)=>{return b.country-a.country});


const handleSortCountry=()=>{

//   const sortedByCountry=data.sort((a,b)=>{return (b.country).localeCompare(a.country)});

//   setData(sortedByCountry);
//   console.log(sortedByCountry)
  console.log("clicked")
}
// console.log("sorted",sortedById)


const handleDelete=(postId)=>{
  DeleteLocation(postId);
  const x=data.filter((e)=>e.id!=postId)
  console.log(x)
  setData(x)

}

  return (
    <TableContainer p={'5'}>
    <Table variant='striped' >
      <TableCaption>Locations Available</TableCaption>
      <Thead>
        <Tr>
          <Th>Image</Th>
          <Th onClick={handleSortCountry}>country</Th>
          <Th>location</Th>
          <Th>description</Th>
          <Th isNumeric>Price</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
       { data.map(item=>{
        return (
          <Tr key={item.id} >
          <Td >
            <Image
              boxSize='100px'
              objectFit='cover'
              src={item.image}
              alt={item.location}
            />
          </Td>
          <Td>{item.country}</Td>
          <Td>{item.location}</Td>
          <Td whiteSpace={'wrap'}>{item.description}</Td>
          <Td isNumeric>{item.price}</Td>
          <Td><Button colorScheme='red' 
          onClick={()=>handleDelete(item.id)} >Delete</Button></Td>
        </Tr>
       
        )
       })}
       
      </Tbody>
      
    </Table>
  </TableContainer>
  )
}
