import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Spacer,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, SetPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
  };

  return (
    <Box pt={40} w="40%" h="90vh" margin="auto">
      <Center>
        <FormControl onSubmit={register}>
          <FormLabel>Email Address:</FormLabel>
          <Input
            id="email"
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Spacer h={5} />
          <FormLabel>Password:</FormLabel>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
          />
          <Spacer />
          <Button colorScheme="messenger" mt={10} w="full">
            Register
          </Button>
        </FormControl>
      </Center>
    </Box>
  );
};

export default Register;
