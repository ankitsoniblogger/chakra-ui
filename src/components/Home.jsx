import { Box } from "@chakra-ui/react";
import React from "react";

import Blogs from "./Blogs";

const Home = () => {
  return (
    <Box mt={20} mb={20} px={20}>
      <Blogs />
      <Blogs />
      <Blogs />
    </Box>
  );
};

export default Home;
