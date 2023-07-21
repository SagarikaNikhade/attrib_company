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

const Oems = () => {

  const [data , setData] = useState({
    name_of_the_model: "",
    year_of_the_model:"",
    price_of_new_vehicle:"",
    colors:"",
    mileage:"",
    power:"",
    max_speed:"",
    image_of_vehicle:"",
  });

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post(`https://relieved-teal-parrot.cyclic.app/getoems/add`,{
      ...data,
    }).then((res)=>console.log(res))
  }
  
  return (
    <Box>
      <Heading>Add Oems</Heading>
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
            placeholder={"name_of_the_model"}
            color={"green"}
            value={data.name_of_the_model} 
            onChange={(e)=>setData({...data, name_of_the_model:e.target.value})}
          />
          <Input
            type={"text"}
            placeholder={"year_of_the_model"}
            color={"green"}
            value={data.year_of_the_model} 
            onChange={(e)=>setData({...data, year_of_the_model:e.target.value})}
          />
          <Input
            type={"text"}
            placeholder={"price_of_new_vehicle"}
            color={"green"}
            value={data.price_of_new_vehicle} 
            onChange={(e)=>setData({...data, price_of_new_vehicle:e.target.value})}
          />
          <Input
            type={"text"}
            placeholder={"colors"}
            color={"green"}
            value={data.colors} 
            onChange={(e)=>setData({...data, colors:e.target.value})}
          />
          <Input
            type={"text"}
            placeholder={"mileage"}
            color={"green"}
            value={data.mileage} 
            onChange={(e)=>setData({...data, mileage:e.target.value})}
          />
          <Input
            type={"text"}
            placeholder={"power"}
            color={"green"}
            value={data.power} 
            onChange={(e)=>setData({...data, power:e.target.value})}
          />
          <Input
            type={"text"}
            placeholder={"max_speed"}
            color={"green"}
            value={data.max_speed} 
            onChange={(e)=>setData({...data, max_speed:e.target.value})}
          />
          <Input
            type={"text"}
            placeholder={"image_of_vehicle"}
            color={"green"}
            value={data.image_of_vehicle} 
            onChange={(e)=>setData({...data, image_of_vehicle:e.target.value})}
          />
          <Button colorScheme={"green"} onClick={handleSubmit}>
            ADD Oems
          </Button>
        </Flex>
      </Center>
    </Box>
  )
}

export default Oems
