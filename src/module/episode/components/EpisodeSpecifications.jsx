import React from "react";
import { Grid2 as Grid, Stack, Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Card } from "../../app/components";

const EpisodeSpecifications = ({ episode }) => (
  <Stack direction="column" spacing={4}>
    <Box>
      <Typography variant="h2">{episode.name}</Typography>
      <Typography>ID: ({episode.id})</Typography>
    </Box>

    <Grid container direction="row" spacing={4}>
      <Grid size={4}>
        <Card title="Episode" description={episode.episode} />
      </Grid>
      <Grid size={4}>
        <Card title="Air Date" description={episode.air_date} />
      </Grid>
    </Grid>
  </Stack>
);

EpisodeSpecifications.defaultProps = {
  episode: {},
};

EpisodeSpecifications.propTypes = {
  episode: PropTypes.object.isRequired,
};

export default EpisodeSpecifications;
