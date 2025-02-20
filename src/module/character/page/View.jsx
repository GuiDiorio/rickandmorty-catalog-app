import React from "react";

import { useParams } from "react-router";
import { Fetcher, PageLayout } from "../../app/components";
import { read } from "../../app/utils/api";

import {
  Box,
  CardMedia,
  Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";
import { CharacterSpecifications } from "../components";

const View = () => {
  const { id } = useParams();

  return (
    <Fetcher request={() => read("/character", id)}>
      {({ data: character }) => (
        <PageLayout>
          <Grid container direction="row" spacing={4}>
            <Grid size={3}>
              <CardMedia
                component="img"
                image={character.image}
                sx={{ maxWidth: "100%", minHeight: "100%" }}
              />
            </Grid>

            <Grid size={9}>
              <CharacterSpecifications character={character} />
            </Grid>
          </Grid>
        </PageLayout>
      )}
    </Fetcher>
  );
};

export default View;
