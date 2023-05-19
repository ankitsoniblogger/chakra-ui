import { Box, Button, Flex, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";

const NavItem = ["Home", "About", "Services", "Blog"];

const Navbar = () => {
  return (
    <Box
      shadow="sm"
      borderBottom="1px"
      borderBottomColor="gray.50"
      w="100%"
      margin="auto"
      p={4}
    >
      <Flex px={20} alignItems="center" justifyContent="space-between">
        <Heading cursor="pointer" fontFamily="Poppins" size="md">
          Logo.
        </Heading>
        <Flex gap={10}>
          <Wrap
            fontFamily="Poppins"
            fontSize="sm"
            fontWeight="500"
            spacing="30px"
            align="center"
            display={{ md: "flex" }}
          >
            {NavItem.map((nav, i) => (
              <WrapItem
                cursor="pointer"
                _hover={{
                  color: "blue.500",
                }}
                key={i}
              >
                {nav}
              </WrapItem>
            ))}
          </Wrap>
          <Button colorScheme="telegram">Get Started</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
