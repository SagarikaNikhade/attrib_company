import React, { useState } from 'react'
import { useDispatch,useSelector} from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginUser } from '../Redux/authReducer/action';

import { Box, Button ,useDisclosure, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Input,FormControl,FormLabel} from '@chakra-ui/react';

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const x = useSelector((store)=>store.authReducer.users)
  console.log(x)

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (e) =>{
    e.preventDefault();
    const userData = {
        email,password
    }
    // console.log(userData)
    dispatch(loginUser(userData)).then(()=>navigate(location.state))
    
    setEmail(" ");
    setPassword(" ");
}

   

  return (
    <Box>
       <Button onClick={onOpen}>Log In</Button>

       <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log In</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input ref={initialRef} placeholder='Email' type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder='Password' type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Login
