import { Box, Flex, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import img1 from "../assets/1 (1).jpg";
import img2 from "../assets/1 (2).jpg";
import img3 from "../assets/1 (3).jpg";

const Blogs = () => {
  return (
    <Flex
      shadow="sm"
      rounded="md"
      w="80%"
      m="auto"
      mt={10}
      align="center"
      gap={20}
      bg="blue.50"
      margin="auto"
    >
      <Image w="30%" rounded="md" shadow="md" src={img1} />
      <Box w="50%" fontFamily="Poppins">
        <Heading size="lg" letterSpacing="-.09rem" cursor="pointer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Heading>
        <Text fontSize="sm" mt={3} letterSpacing="-.02rem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          nostrum nesciunt neque, ut consequuntur labore esse obcaecati
          assumenda blanditiis cum?
        </Text>
        <Button mt="10px" size="xs" rounded="none" colorScheme="messenger">
          Read More
        </Button>
      </Box>
    </Flex>
  );
};

export default Blogs;
