import React from "react";

import { useParams } from "react-router";
import { PageLayout } from "../../app/components";
import { read } from "../../app/utils/api";

import { CardMedia, Grid2 as Grid, Stack, Typography } from "@mui/material";
import { CharacterSpecifications } from "../components";

import { useFetch } from "../../app/hooks";

const View = () => {
  const { id } = useParams();
  const {
    data: character,
    isLoading,
    notFound,
  } = useFetch(() => read("/character", id));

  if (isLoading) return <Typography>Loading...</Typography>;
  if (notFound) return <Typography>Not found</Typography>;

  return (
    <PageLayout>
      <Stack direction="column" sx={{ flexGrow: 1 }} justifyContent="space-between">
        <Grid container direction="row" spacing={4}>
          <Grid size={3}>
            <CardMedia
              component="img"
              image={character?.image}
              sx={{ maxWidth: "100%", minHeight: "100%" }}
            />
          </Grid>

          <Grid size={9}>
            <CharacterSpecifications character={character} />
          </Grid>
        </Grid>
        

        {/* add cards of the episodes where the character appears */}
        
      </Stack>
    </PageLayout>
  );
};

export default View;
