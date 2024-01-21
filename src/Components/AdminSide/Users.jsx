import React from 'react'
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



const Users = ({props,onDelete}) => {

  const handleDelete=(Id)=>{
    onDelete(Id);
    console.log('user deleted')
    
  }
    
  return (
    <TableContainer p={'10'}>
    <Table variant='striped' >
      <TableCaption>Users Available</TableCaption>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Password</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
       { props.map(item=>{
        return (
          <Tr key={item.id} >
          <Td >
           {`${item.firstName} ${item.lastName}`}
          </Td>
          <Td>{item.email}</Td>
          <Td>{item.password}</Td>
         
          <Td><Button colorScheme='red' 
          onClick={()=>handleDelete(item.id)} 
          >Delete</Button></Td>
        </Tr>
       
        )
       })}
       
      </Tbody>
      
    </Table>
  </TableContainer>
  )
}

export default Users