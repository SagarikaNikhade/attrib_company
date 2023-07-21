import React, {useState } from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
} from "@chakra-ui/react";
import axios from "axios";

const AddDeals = () => {

  const [data , setData] = useState({
    kms: "",
    major_scratches:"",
    original_paint:"",
    number_of_accidents_reported:"",
    number_of_previous_buyers:"",
    registration_place:"",
    image:"",
    title:"",
    description:"",
    price:"",
  });

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post(`https://relieved-teal-parrot.cyclic.app/inventory/add`,{
      ...data,
    }).then((res)=>console.log(res))
  }
  
  return (
    <Box>
      <Heading>Add New Deals</Heading>
      <br/>
       <Center>
        <Flex
          direction={"column"}
          gap={6}
          border={"2px solid black"}
          p={6}
          borderRadius={"2xl"}
        >
          <Input
            type={"text"}
            placeholder={"KMs"}
            color={"green"}
            value={data.kms} 
            onChange={(e)=>setData({...data, kms:e.target.value})}
          />
          <Input
            type={"text"}
            placeholder={"major_scratches"}
            color={"green"}
            value={data.major_scratches} 
            onChange={(e)=>setData({...data, major_scratches:e.target.value})}
          />
          <Input
            type={"text"}
            placeholder={"original_paint"}
            color={"green"}
            value={data.original_paint} 
            onChange={(e)=>setData({...data, original_paint:e.target.value})}
          />
          <Input
            type={"text"}
            placeholder={"number_of_accidents_reported"}
            color={"green"}
            value={data.number_of_accidents_reported} 
            onChange={(e)=>setData({...data, number_of_accidents_reported:e.target.value})}
          />
          <Input
            type={"text"}
            placeholder={"number_of_previous_buyers"}
            color={"green"}
            value={data.number_of_previous_buyers} 
            onChange={(e)=>setData({...data, number_of_previous_buyers:e.target.value})}
          />
          <Input
            type={"text"}
            placeholder={"registration_place"}
            color={"green"}
            value={data.registration_place} 
            onChange={(e)=>setData({...data, registration_place:e.target.value})}
          />
          <Input
            type={"text"}
            placeholder={"image"}
            color={"green"}
            value={data.image} 
            onChange={(e)=>setData({...data, image:e.target.value})}
          />
          <Input
            type={"text"}
            placeholder={"title"}
            color={"green"}
            value={data.title} 
            onChange={(e)=>setData({...data, title:e.target.value})}
          />
          <Input
            type={"text"}
            placeholder={"description"}
            color={"green"}
            value={data.description} 
            onChange={(e)=>setData({...data, description:e.target.value})}
          />
          <Input
            type={"number"}
            placeholder={"price"}
            color={"green"}
            value={data.price} 
            onChange={(e)=>setData({...data, price:e.target.value})}
          />
          <Button colorScheme={"green"} onClick={handleSubmit}>
            ADD DEALS
          </Button>
        </Flex>
      </Center>
    </Box>
  )
}

export default AddDeals
