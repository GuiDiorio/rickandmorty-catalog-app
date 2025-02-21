import React from "react";

import { useParams } from "react-router";
import { PageLayout } from "../../app/components";
import { read } from "../../app/utils/api";

import { CardMedia, Grid2 as Grid, Typography } from "@mui/material";
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
    </PageLayout>
  );
};

export default View;
