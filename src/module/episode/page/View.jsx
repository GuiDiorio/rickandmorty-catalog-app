import React from "react";

import { useParams } from "react-router";
import { PageLayout } from "../../app/components";
import { read } from "../../app/utils/api";

import { Grid2 as Grid, Typography } from "@mui/material";
import { useFetch } from "../../app/hooks";
import { EpisodeSpecifications } from "../components";

const View = () => {
  const { id } = useParams();
  const {
    data: episode,
    isLoading,
    notFound,
  } = useFetch(() => read("/episode", id));

  if (isLoading) return <Typography>Loading...</Typography>;
  if (notFound) return <Typography>Not found</Typography>;

  return (
    <PageLayout>
      <Grid container direction="row" spacing={4}>
        <Grid size={12}>
          <EpisodeSpecifications episode={episode} />
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default View;
