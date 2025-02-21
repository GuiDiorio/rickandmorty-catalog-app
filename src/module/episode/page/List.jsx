import React from "react";

import { Grid2 as Grid, Typography } from "@mui/material";
import { Card, PageLayout } from "../../app/components";

import { useFetch } from "../../app/hooks";
import { list } from "../../app/utils/api";

const List = () => {
  const {
    data: allEpisodes,
    isLoading,
    notFound,
  } = useFetch(() => list("/episode"));

  if (isLoading) return <Typography>Loading...</Typography>;
  if (notFound) return <Typography>Not found</Typography>;

  return (
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
                  variant="link"
                  url={`/episodes/${episode.id}`}
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
  );
};

List.defaultProps = {};
List.propTypes = {};

export default List;
