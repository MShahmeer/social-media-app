import { Box } from "@mui/material";
import React from "react";
import Posts from "./Posts";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Posts name={"Shahmeer"} />
      <Posts name={"Shahmeer"} />
      <Posts name={"Shahmeer"} />
      <Posts name={"Shahmeer"} />
      <Posts name={"Shahmeer"} />
      <Posts name={"Shahmeer"} />
    </Box>
  );
};

export default Feed;
