import React from 'react'
import { Box} from '@chakra-ui/react';
import SignUp from "../Pages/SignUp"
import Login from '../Pages/Login';
import AddDeals from '../Pages/AddDeals';
import Oems from '../Pages/Oems';
import Alldeals from "../Pages/Alldeals";

const Navbar = () => {
  return(
    <Box style={{ display: "flex", justifyContent: "space-evenly", border: "1px solid black", }}>
      <AddDeals/>
      <Alldeals/>
      <Oems/>
      <SignUp/>
      <Login/>
    </Box>
  )
}

export default Navbar;