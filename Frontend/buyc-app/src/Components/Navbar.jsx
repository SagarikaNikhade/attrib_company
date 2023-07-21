import React from 'react'
import { Box,Heading} from '@chakra-ui/react';
import { Link } from 'react-router-dom'
// import SignUp from "../Pages/SignUp"
// import Login from '../Pages/Login';
// import AddDeals from '../Pages/AddDeals';
// import Oems from '../Pages/Oems';
// import Alldeals from "../Pages/Alldeals";

const Navbar = () => {
  return(
    <Box>
      <Box style={{ display: "flex", justifyContent: "space-evenly", border: "1px solid black", }}>
        <Link to={"/sign"}>SignUp</Link>

        <Link to={"/login"}>LogIn</Link>

        <Link to={"/"}>All Deals</Link>

        <Link to={"/oems"}>Add Oems</Link>

        <Link to={"/add"}>Add Deals</Link>
      </Box>
      <br />
      
    </Box>
  )
}

export default Navbar;