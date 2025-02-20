import React from "react";

import { Fetcher, PageLayout } from "../../app/components";
import { read } from "../../app/utils/api";
import { useParams } from "react-router";

import { Grid2 as Grid } from "@mui/material";
import { LocationSpecifications } from "../components";

const View = () => {
  const { id } = useParams();

  return (
    <Fetcher request={() => read("/location", id)}>
      {({ data: location }) => (
        <PageLayout>
          <Grid container direction="row" spacing={4}>
            <Grid size={12}>
              <LocationSpecifications location={location} />
            </Grid>
          </Grid>
        </PageLayout>
      )}
    </Fetcher>
  );
};

export default View;
