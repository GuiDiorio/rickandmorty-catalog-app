import { Grid2 as Grid } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { Card } from "../../app/components";

const LocationList = ({ locations, size = 4 }) => (
  <Grid container direction="row" columnSpacing={2} rowSpacing={5}>
    {locations.map((location) => (
      <Grid size={size} key={location.id}>
        <Card
          variant="link"
          url={`/locations/${location.id}`}
          title={location.name}
          description={`${location.type} - ${location.dimension}`}
        />
      </Grid>
    ))}
  </Grid>
);

LocationList.defaultProps = {
  locations: [],
  size: 4,
};

LocationList.propTypes = {
  locations: PropTypes.array,
  size: PropTypes.number,
};

export default LocationList;
