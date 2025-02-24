import React, { useEffect, useState } from "react";

import { useParams } from "react-router";
import { PageLayout } from "../../app/components";
import { read, readList } from "../../app/utils/api";

import { CardMedia, Grid2 as Grid, Stack, Typography } from "@mui/material";
import { CharacterSpecifications } from "../components";

import { useFetch } from "../../app/hooks";
import { EpisodeList } from "../../episode/components";

const View = () => {
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  const { id } = useParams();

  const {
    data: characterData,
    isLoading,
    notFound,
  } = useFetch(() => read("/character", id));

  const clearEpisodes = character?.episode?.map((episode) =>
    episode.split("/").pop()
  );
  const { data: episodesData, refresh: refreshEpisodes } = useFetch(() =>
    clearEpisodes ? readList("/episode", clearEpisodes) : null
  );

  useEffect(() => {
    if (characterData) {
      setCharacter(characterData);
    }

    if (character) {
      refreshEpisodes();
    }
  }, [characterData, character]);

  useEffect(() => {
    if (episodesData) {
      // prevent a episode to an array with one position
      setEpisodes(Array.isArray(episodesData) ? episodesData : [episodesData]);
    }
  }, [episodesData]);

  if (isLoading) return <Typography>Loading...</Typography>;
  if (notFound) return <Typography>Not found</Typography>;

  return (
    <PageLayout>
      <Stack direction="column">
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

        <Stack direction="column" pt={6} spacing={3}>
          <Typography variant="h2">
            Episodes where {character?.name} appears
          </Typography>

          <EpisodeList episodes={episodes} />
        </Stack>
      </Stack>
    </PageLayout>
  );
};

export default View;
