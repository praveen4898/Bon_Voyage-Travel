import React, { useCallback, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Image ,
    Button,
    Spacer,
  } from '@chakra-ui/react'
import axios from 'axios';
import AddLocations from './AddLocations';

  async function DeleteLocation(id){
    try {
        let res= await axios.delete(`https://mockserver-3.onrender.com/locations/${id}`);
        
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}


const MemoizedAddLocations = React.memo(AddLocations);

export const AdminTable = ({props}) => {
  const [data,setData]=useState(props);
  
  const handleDelete=useCallback((postId)=>{
    DeleteLocation(postId);
    const x=data.filter((e)=>e.id!=postId)
    setData(x)

  },[])

  return (<>
      <MemoizedAddLocations  />
      <Spacer/>
    <TableContainer p={'5'} >
    <Table variant='striped' colorScheme={'blue'} >
      <TableCaption>Locations Available</TableCaption>
      <Thead>
        <Tr>
          <Th>Image</Th>
          <Th>country</Th>
          <Th>location</Th>
          <Th>description</Th>
          <Th isNumeric>Price</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody >
       { data.map(item=>{
        return (
          <Tr key={item.id}  >
          <Td >
            <Image
              boxSize='100px'
              objectFit='cover'
              src={item.image}
              alt={item.location}
              loading='lazy'
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
  </>
  )
}
