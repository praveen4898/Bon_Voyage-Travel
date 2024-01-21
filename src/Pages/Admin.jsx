import React, { useEffect, useMemo, useState } from 'react'
import { Box,Heading,Flex } from '@chakra-ui/react'
import { SideDrawer } from '../Components/AdminSide/SideDrawer'
import  axios  from 'axios';
import { AdminTable } from '../Components/AdminSide/AdminTable';

import { useDispatch, useSelector } from 'react-redux';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Spacer,Button } from '@chakra-ui/react'
import { fetchDestinationData } from '../Redux/action';
import Users from '../Components/AdminSide/Users';
import SmallScreenCard from '../Components/AdminSide/SmallScreenCard';

import {useNavigate} from 'react-router-dom'



async function DeleteUser(id){
  try {
      let res= await axios.delete(`https://mockserver-3.onrender.com/users/${id}`);
      
      console.log(res.data)
  } catch (error) {
      console.log(error)
  }
}



 const Admin = () => {
        const [data,setData]=useState([]);
        const [users,setUsers]=useState([]);

        const dispatch = useDispatch();
        const { isloading, iserror, destination } = useSelector((state) => state);
       
        const navigate= useNavigate()

        useEffect(() => {
          dispatch(fetchDestinationData());
        }, [dispatch]);


        useEffect(() => {
          setData(destination);
        }, [destination]);
        // console.log("dispatch data ",isloading,destination)
      


   useEffect(()=>{
        async function fetchUsers(){
             try {
                let res= await axios.get("https://mockserver-3.onrender.com/users");
                // console.log(res.data);
                setUsers(res.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchUsers();
    },[])

    // console.log(users);

    const deleteUser=(id)=>{
      DeleteUser(id);
      const updateuser=users.filter((user)=>user.id!=id)
      setUsers(updateuser);
    }

    const memoizedAdminTable = useMemo(() => {
      return <AdminTable props={data}/>;
    }, [data]);

    const memoizedUsersTable = useMemo(() => {
      return <Users props={users} onDelete={deleteUser}/>;
    }, [users]);

   


    const logout=()=>{
      navigate('/')
      console.log("user logged out")
    }
  return (
    <Box>
        <Flex bgColor={'whitesmoke'} p={'4'} justifyContent={'space-evenly'}> 
        {/* <SideDrawer/> */}

        <Heading color='teal' >Admin Dashboard</Heading>
       <Button onClick={logout} colorScheme='teal' position={'absolute'} left={'90%'}>Logout</Button>
        </Flex>
       
       <Spacer/>
       <Spacer/>
<Tabs isFitted variant='soft-rounded' colorScheme='blue' >
  <TabList>
    <Tab>Locations</Tab>
    <Tab>Users</Tab>
  
  </TabList>

  <TabPanels  >
    <TabPanel>
   {data.length<=0?"loading......." : memoizedAdminTable }
    </TabPanel>
    <TabPanel>
      { memoizedUsersTable}
    </TabPanel>
  </TabPanels>
</Tabs>
        
{/* <SmallScreenCard/> */}
    </Box>
  )
}

export default Admin;