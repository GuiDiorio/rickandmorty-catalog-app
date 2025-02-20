import React from "react";

import { PageLayout, Fetcher, Card } from "../../app/components";
import { Typography, Grid2 as Grid } from "@mui/material";

import { list } from "../../app/utils/api";

const List = () => {
  return (
    <Fetcher request={() => list("/location")}>
      {({ data: allLocations }) => (
        <PageLayout>
          <Grid container spacing={4} direction="row">
            <Grid size={12}>
              <Typography variant="h1">Locations</Typography>
            </Grid>

            <Grid size={12}>
              <Grid
                container
                direction="row"
                columnSpacing={2}
                rowSpacing={5}
                justifyContent="space-between"
              >
                {allLocations.map((location) => (
                  <Grid size={6} key={location.id}>
                    <Card
                      variant="default"
                      media={location.image}
                      title={location.name}
                      description={`${location.type}/${location.dimension}`}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </PageLayout>
      )}
    </Fetcher>
  );
};

List.defaultProps = {};
List.propTypes = {};

export default List;
