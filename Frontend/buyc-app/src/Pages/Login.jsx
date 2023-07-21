import { Box, Button, Center, Flex, Input, useToast } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  let handleSubmit = async () => {
    let payload = {
      email,
      password,
    };
    try {
      let sendData = await axios.post(
        `https://relieved-teal-parrot.cyclic.app/users/login`,
        payload
      );
      console.log(sendData)
      if (sendData.status === 200) {
        localStorage.setItem("token", sendData.data.token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `${sendData.data.token}`;
        toast({
          title: "logged in Successfully.",
          description: `You have successfully loggedIn`,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Wrong Credentials.",
        description: `Check your Email and password before login`,
        status: "error",
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
          gap={4}
          border={"2px solid black"}
          p={6}
          borderRadius={"2xl"}
        >
          <Input
            type={"email"}
            placeholder={"Enter Your Email Here!"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type={"password"}
            placeholder={"Enter Your Password Here!"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type={"button"} colorScheme={"blue"} onClick={handleSubmit}>
            Login
          </Button>
        </Flex>
      </Center>
    </Box>
  );
};

export default Login;
