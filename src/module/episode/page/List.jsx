import React from "react";

import { PageLayout, Fetcher, Card } from "../../app/components";
import { Typography, Grid2 as Grid } from "@mui/material";

import { list } from "../../app/utils/api";

const List = () => {
  return (
    <Fetcher request={() => list("/episode")}>
      {({ data: allEpisodes }) => (
        <PageLayout>
          <Grid container spacing={4} direction="row">
            <Grid size={12}>
              <Typography variant="h1">Episodes</Typography>
            </Grid>

            <Grid size={12}>
              <Grid
                container
                direction="row"
                columnSpacing={2}
                rowSpacing={5}
                justifyContent="space-between"
              >
                {allEpisodes.map((episode) => (
                  <Grid size={6} key={episode.id}>
                    <Card
                      variant="default"
                      media={episode.image}
                      title={episode.name}
                      description={episode.episode}
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
