import React from "react";
import { Grid2 as Grid, Stack, Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Card } from "../../app/components";

const LocationSpecifications = ({ location }) => (
  <Stack direction="column" spacing={4}>
    <Box>
      <Typography variant="h2">{location.name}</Typography>
      <Typography>ID: ({location.id})</Typography>
    </Box>

    <Grid container direction="row" spacing={4}>
      <Grid size={4}>
        <Card title="Type" description={location.type} />
      </Grid>
      <Grid size={4}>
        <Card title="Dimension" description={location.dimension} />
      </Grid>
    </Grid>
  </Stack>
);

LocationSpecifications.defaultProps = {
  location: {},
};

LocationSpecifications.propTypes = {
  location: PropTypes.object.isRequired,
};

export default LocationSpecifications;
