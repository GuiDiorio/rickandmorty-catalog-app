import React from "react";

import { Grid2 as Grid, Typography } from "@mui/material";
import { Card, PageLayout } from "../../app/components";

import { useFetch } from "../../app/hooks";
import { list } from "../../app/utils/api";

const List = () => {
  const {
    data: allLocations,
    isLoading,
    notFound,
  } = useFetch(() => list("/location"));

  if (isLoading) return <Typography>Loading...</Typography>;
  if (notFound) return <Typography>Not found</Typography>;

  return (
    <PageLayout>
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
                variant="link"
                url={`/locations/${location.id}`}
                media={location.image}
                title={location.name}
                description={`${location.type}/${location.dimension}`}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </PageLayout>
  );
};

List.defaultProps = {};
List.propTypes = {};

export default List;
