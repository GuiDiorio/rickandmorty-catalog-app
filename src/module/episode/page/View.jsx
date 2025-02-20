import React from "react";

import { Fetcher, PageLayout } from "../../app/components";
import { read } from "../../app/utils/api";
import { useParams } from "react-router";

import { Grid2 as Grid } from "@mui/material";
import { EpisodeSpecifications } from "../components";

const View = () => {
  const { id } = useParams();

  return (
    <Fetcher request={() => read("/episode", id)}>
      {({ data: episode }) => (
        <PageLayout>
          <Grid container direction="row" spacing={4}>
            <Grid size={12}>
              <EpisodeSpecifications episode={episode} />
            </Grid>
          </Grid>
        </PageLayout>
      )}
    </Fetcher>
  );
};

export default View;
