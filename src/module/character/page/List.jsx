import React from "react";

import { Box, Stack, Typography, Grid2 as Grid } from "@mui/material";
import { PageLayout, Fetcher, Card } from "../../app/components";

import { list } from "../../app/utils/api";

const List = () => {
  return (
    <Fetcher request={() => list("/character")}>
      {({ data: allCharacters }) => (
        <PageLayout>
          <Grid container spacing={4} direction="row">
            <Grid size={12}>
              <Typography variant="h1">Characters</Typography>
            </Grid>

            <Grid size={12}>
              <Grid
                container
                columnSpacing={2}
                rowSpacing={5}
                justifyContent="space-between"
              >
                {allCharacters.map((character) => (
                  <Grid size={6} key={character.id}>
                    <Card
                      media={character.image}
                      title={character.name}
                      description={character.species}
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
