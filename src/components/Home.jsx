import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import img1 from "../assets/pngegg.png";

const Home = () => {
  return (
    <Box bg="red.100" w="100%" margin="auto" px={20}>
      <Flex align="center">
        <Box bg="blue.300">
          <Heading>This is Heading</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            consectetur tempora quae impedit veritatis totam quis optio, animi
            sint consequatur.{" "}
          </Text>
        </Box>
        <Box bg="orange.400">
          <Image src={img1} w="50%" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
