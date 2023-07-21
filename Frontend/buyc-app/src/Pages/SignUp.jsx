import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  let handleSubmit = async () => {
    let payload = {
      name,
      email,
      profile,
      password,
    };
    const sendData = await axios.post(
      `https://relieved-teal-parrot.cyclic.app/users/register`,
      payload
    );
    console.log(sendData)
    if (sendData.status === 200) {
      toast({
        title: "Account created.",
        description: `Hello! ${name}. We've created your account Successfully.`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
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
            placeholder={"Your Name Here"}
            color={"green"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type={"email"}
            placeholder={"Your Email Here"}
            color={"green"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type={"text"}
            placeholder={"Your profile Here"}
            color={"green"}
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
          />
          <Input
            type={"password"}
            placeholder={"Your Password Here"}
            color={"green"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button colorScheme={"green"} onClick={handleSubmit}>
            Register
          </Button>
        </Flex>
      </Center>
    </Box>
  );
};

export default Register;
