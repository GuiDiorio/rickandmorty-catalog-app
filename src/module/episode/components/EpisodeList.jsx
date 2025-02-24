import { Grid2 as Grid } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { Card } from "../../app/components";

const EpisodeList = ({ episodes, size = 4 }) => (
  <Grid container direction="row" columnSpacing={2} rowSpacing={5}>
    {episodes.map((episode) => (
      <Grid size={size} key={episode.id}>
        <Card
          variant="link"
          url={`/episodes/${episode.id}`}
          title={episode.name}
          description={`${episode.episode} - ${episode.air_date}`}
        />
      </Grid>
    ))}
  </Grid>
);

EpisodeList.defaultProps = {
  episodes: [],
  size: 4,
};

EpisodeList.propTypes = {
  episodes: PropTypes.array,
  size: PropTypes.number,
};

export default EpisodeList;
