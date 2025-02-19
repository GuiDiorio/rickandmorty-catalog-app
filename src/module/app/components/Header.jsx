import React from "react";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box width="100%" bgcolor="primary.main" color="white">
      Rick and Morty Catalog App
    </Box>
  );
};

Header.defaultProps = {};
Header.propTypes = {};

export default Header;
