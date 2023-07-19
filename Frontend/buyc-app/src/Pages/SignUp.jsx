import React, {useState} from 'react'
import { Box, Button ,useDisclosure, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Input,FormControl,FormLabel} from '@chakra-ui/react';
import axios from "axios";

    const initialState = {
      name : "",
      email : "",
      password : "",
      profile :""
  }

const SignUp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [register , setRegister] = useState(initialState)
  
 const handleSubmit = (e) =>{
  e.preventDefault();
  axios.post(`https://relieved-teal-parrot.cyclic.app/register`,{
    ...register,
  }).then((res)=>console.log(res))
    // window.location.href="/login"
 }
console.log(register)
  return (
    <Box>
       <Button onClick={onOpen}>Sign Up</Button>

       <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} type="text" placeholder='First name' name="name" value={register.name} onChange={(e)=>setRegister({...register, name:e.target.value})} required />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input required placeholder='Email' type="text" name="email" value={register.email} onChange={(e)=>setRegister({...register, email:e.target.value})} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input required placeholder='Password' type="password" name="password" value={register.password} onChange={(e)=>setRegister({...register, password:e.target.value})} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Profile</FormLabel>
              <Input required placeholder='Profile' type="text" name="profile" value={register.profile} onChange={(e)=>setRegister({...register, profile:e.target.value})} />
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

export default SignUp
