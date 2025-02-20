import React from "react";

import { Fetcher, PageLayout } from "../../app/components";
import { read } from "../../app/utils/api";
import { useParams } from "react-router";

import { Grid2 as Grid, Typography } from "@mui/material";

const View = () => {
  const { id } = useParams();

  return (
    <Fetcher request={() => read("/character", id)}>
      {({ data: character }) => (
        <PageLayout>
          <Grid container spacing={4} direction="row">
            <Grid size={12}>
              <Typography variant="h1">{character.name}</Typography>
            </Grid>
          </Grid>
        </PageLayout>
      )}
    </Fetcher>
  );
};

export default View;
