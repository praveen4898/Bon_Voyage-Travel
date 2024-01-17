<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { Box,Heading,Flex } from '@chakra-ui/react'
import { SideDrawer } from '../Components/AdminSide/SideDrawer'
import  axios  from 'axios';
import { AdminTable } from '../Components/AdminSide/AdminTable';

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'



export const Admin = () => {
        const [data,setData]=useState([]);
        const [users,setUsers]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            try {
                let res= await axios.get("https://mockserver-3.onrender.com/locations");
                // console.log(res.data);
                setData(res.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    },[])

    // console.log(data);
  return (
    <Box>
        

        <Flex bgColor={'whitesmoke'} p={'4'} justifyContent={'space-evenly'}> 
        <SideDrawer/>
        <Heading >Admin Dashboard</Heading>
        </Flex>
       
       
<Tabs isFitted variant='soft-rounded' colorScheme='blue' >
  <TabList>
    <Tab>Locations</Tab>
    <Tab>Users</Tab>
    <Tab>Three</Tab>
  </TabList>

  <TabPanels  >
    <TabPanel>
   {data.length<=0?"loading......." : <AdminTable props={data}/>}
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
        
      
       

     

    </Box>
  )
}

=======
import React from 'react'

const Admin = () => {
  return (
    <div>Admin</div>
  )
}

export default Admin
>>>>>>> e339753a3833c3833a9415eca911a6d18ee768d2
