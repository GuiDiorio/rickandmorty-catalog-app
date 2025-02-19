import React from "react";

import { Layout } from "../../app/components";
import { Stack, Typography } from "@mui/material";
import Fetcher from "../../app/components/Fetcher";

import { list } from "../../app/utils/api";

const LocationPage = () => {
  return (
    <Fetcher request={() => list("/location")}>
      {({ data: allLocations }) => (
        <Layout>
          <Typography variant="h1">Locations</Typography>
          <Stack>
            {allLocations.map((location) => (
              <Typography key={location.id}>{location.name}</Typography>
            ))}
          </Stack>
        </Layout>
      )}
    </Fetcher>
  );
};

LocationPage.defaultProps = {};
LocationPage.propTypes = {};

export default LocationPage;
