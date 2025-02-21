import React from "react";

import { Grid2 as Grid, Typography } from "@mui/material";
import { Card, PageLayout } from "../../app/components";

import { list } from "../../app/utils/api";
import { useFetch } from "../../app/hooks";

const List = () => {
  const {
    data: allCharacters,
    isLoading,
    notFound,
  } = useFetch(() => list("/character"));

  if (isLoading) return <Typography>Loading...</Typography>;
  if (notFound) return <Typography>Not found</Typography>;

  return (
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
                  variant="link"
                  url={`/characters/${character.id}`}
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
  );
};

List.defaultProps = {};
List.propTypes = {};

export default List;
