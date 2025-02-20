import React from "react";

import { Grid2 as Grid, Container, Box } from "@mui/material";
import PropTypes from "prop-types";
import Header from "./Header";

const PageLayout = ({ children }) => (
  <Grid container direction="column" rowSpacing={8} pb={8} minHeight="100%">
    <Grid size={false}>
      <Header />
    </Grid>

    <Grid size={12} sx={{ flexGrow: 1 }}>
      <Container>{children}</Container>
    </Grid>
  </Grid>
);

PageLayout.defaultProps = {
  children: undefined,
};

PageLayout.propTypes = {
  children: PropTypes.node,
};

export default PageLayout;
