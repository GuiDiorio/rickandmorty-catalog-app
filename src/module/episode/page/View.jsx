import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageLayout } from "../../app/components";
import { read, readList } from "../../app/utils/api";

import { Grid2 as Grid, Stack, Typography } from "@mui/material";
import { useFetch } from "../../app/hooks";
import { CharacterList } from "../../character/components";
import { EpisodeSpecifications } from "../components";

const View = () => {
  const [episode, setEpisode] = useState(null);
  const [characters, setCharacters] = useState([]);

  const { id } = useParams();
  const {
    data: episodeData,
    isLoading,
    notFound,
  } = useFetch(() => read("/episode", id));

  const clearCharacters = episode?.characters?.map((character) =>
    character.split("/").pop()
  );
  const { data: charactersData, refresh: refreshCharacters } = useFetch(() =>
    clearCharacters ? readList("/character", clearCharacters) : null
  );

  useEffect(() => {
    if (episodeData) {
      setEpisode(episodeData);
    }

    if (episode) {
      refreshCharacters();
    }
  }, [episodeData, episode]);

  useEffect(() => {
    if (charactersData) {
      setCharacters(
        Array.isArray(charactersData) ? charactersData : [charactersData]
      );
    }
  }, [charactersData]);

  if (isLoading) return <Typography>Loading...</Typography>;
  if (notFound) return <Typography>Not found</Typography>;

  return (
    <PageLayout>
      <Stack direction="column">
        <Grid container direction="row" spacing={4}>
          <Grid size={12}>
            <EpisodeSpecifications episode={episode} />
          </Grid>
        </Grid>

        <Stack direction="column" pt={6} spacing={3}>
          <Typography variant="h2">
            Characters who appeared in {episode?.name}
          </Typography>

          <CharacterList characters={characters} />
        </Stack>
      </Stack>
    </PageLayout>
  );
};

export default View;
