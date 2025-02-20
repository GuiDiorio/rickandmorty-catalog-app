import React from "react";

import { Grid2 as Grid, Container } from "@mui/material";
import PropTypes from "prop-types";
import Header from "./Header";

const PageLayout = ({ children }) => {
  return (
    <Grid container direction="row" minHeight="100%" rowSpacing={8} pb={8}>
      <Grid item size={12}>
        <Header />
      </Grid>

      <Grid item size={12}>
        <Container>{children}</Container>
      </Grid>
    </Grid>
  );
};

PageLayout.defaultProps = {
  children: undefined,
};

PageLayout.propTypes = {
  children: PropTypes.node,
};

export default PageLayout;
