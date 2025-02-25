import React from "react";

import { Box, Container, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const Header = ({ children }) => {
  const location = useLocation();

  return (
    <Box
      width="100%"
      minHeight="80px"
      bgcolor="primary.main"
      sx={{
        py: 2,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <Container>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction="row"
        >
          <Typography variant="h1" color="primary.light">
            Rick and Morty{" "}
            <Typography variant="h2" color="primary.light">
              Catalog App
            </Typography>
          </Typography>

          <Stack direction="row" spacing={2}>
            <Link
              to="/characters"
              isActive={location.pathname.includes("/characters")}
            >
              Characters
            </Link>

            <Link
              to="/episodes"
              isActive={location.pathname.includes("/episodes")}
            >
              Episodes
            </Link>

            <Link
              to="/locations"
              isActive={location.pathname.includes("/locations")}
            >
              Locations
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

Header.defaultProps = {
  children: undefined,
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
