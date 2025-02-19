import React from "react";

import { Grid2 as Grid, Container } from "@mui/material";
import PropTypes from "prop-types";
import { Header } from "./index";

const Layout = ({ children }) => {
  return (
    <Grid container direction="column" minHeight="100%" rowSpacing={8} pb={8}>
      <Grid item size={12}>
        <Header />
      </Grid>

      <Grid item size={12}>
        <Container>{children}</Container>
      </Grid>
    </Grid>
  );
};

Layout.defaultProps = {
  children: undefined,
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
