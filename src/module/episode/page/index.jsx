import React from "react";

import { Layout } from "../../app/components";
import { Stack, Typography } from "@mui/material";
import Fetcher from "../../app/components/Fetcher";

import { list } from "../../app/utils/api";

const EpisodePage = () => {
  return (
    <Fetcher request={() => list("/episode")}>
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
