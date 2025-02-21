import React from "react";

import { Grid2 as Grid, Stack, Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Card } from "../../app/components";

const CharacterSpecifications = ({ character }) => (
  <Stack direction="column" spacing={4}>
    <Box>
      <Typography variant="h2">{character?.name}</Typography>
      <Typography>ID: ({character?.id})</Typography>
    </Box>

    <Grid container direction="row" spacing={4}>
      <Grid size={4}>
        <Card title="Species" description={character?.species} />
      </Grid>

      <Grid size={4}>
        <Card title="Gender" description={character?.gender} />
      </Grid>

      <Grid size={4}>
        <Card title="Status" description={character?.status} />
      </Grid>

      <Grid size={4}>
        <Card title="Origin" description={character?.origin?.name} />
      </Grid>

      <Grid size={4}>
        <Card title="Location" description={character?.location?.name} />
      </Grid>
    </Grid>
  </Stack>
);

CharacterSpecifications.defaultProps = {
  character: {},
};

CharacterSpecifications.propTypes = {
  character: PropTypes.object.isRequired,
};

export default CharacterSpecifications;
