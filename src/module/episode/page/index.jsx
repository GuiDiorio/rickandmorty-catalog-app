import React from "react";
import { Layout } from "../../app/components";
import { Stack, Typography } from "@mui/material";
import Fetcher from "../../app/components/Fetcher";
import * as episodeApi from "../utils/api";

const EpisodePage = () => {
  return (
    <Fetcher request={() => episodeApi.list()}>
      {({ data: allEpisodes }) => (
        <Layout>
          <Typography variant="h1">Episodes</Typography>
          <Stack>
            {allEpisodes.map((episode) => (
              <Typography key={episode.id}>{episode.name}</Typography>
            ))}
          </Stack>
        </Layout>
      )}
    </Fetcher>
  );
};

EpisodePage.defaultProps = {};
EpisodePage.propTypes = {};

export default EpisodePage;
