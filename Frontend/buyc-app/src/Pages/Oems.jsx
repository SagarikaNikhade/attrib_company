import React from 'react'
import { Box, Button ,useDisclosure, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Input,FormControl,FormLabel} from '@chakra-ui/react';

const Oems = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  return (
    <Box>
       <Button onClick={onOpen}>Oems Deals</Button>

       <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Oems Deals</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input ref={initialRef} placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Kms</FormLabel>
              <Input placeholder='Kms' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Major_scratches</FormLabel>
              <Input placeholder='major_scratches' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Original_paint</FormLabel>
              <Input placeholder='original_paint' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Number_of_accidents_reported</FormLabel>
              <Input placeholder='number_of_accidents_reported' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Number_of_previous_buyers</FormLabel>
              <Input placeholder='number_of_previous_buyers' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Registration_place</FormLabel>
              <Input placeholder='registration_place' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Image</FormLabel>
              <Input placeholder='image' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input placeholder='description' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input placeholder='price' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Oems
