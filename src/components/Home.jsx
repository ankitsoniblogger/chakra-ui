import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import img1 from "../assets/pngegg.png";

const Home = () => {
  return (
    <Box paddingTop="10%" w="100%" margin="auto" px={20}>
      <Flex align="center">
        <Box width="40%" margin="auto" fontFamily="Poppins">
          <Heading>This is Heading</Heading>
          <Text w="80%" marginTop={6}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            consectetur tempora quae impedit veritatis totam quis optio, animi
            sint consequatur.{" "}
          </Text>
          <Button w={40} mt={3} colorScheme="telegram">
            Let's Go
          </Button>
        </Box>
        <Box>
          <Image src={img1} w="50%" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
