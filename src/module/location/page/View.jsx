import React, { useEffect, useState } from "react";

import { useParams } from "react-router";
import { PageLayout } from "../../app/components";
import { read, readList } from "../../app/utils/api";

import { Grid2 as Grid, Stack, Typography } from "@mui/material";
import { useFetch } from "../../app/hooks";
import { CharacterList } from "../../character/components";
import { LocationSpecifications } from "../components";

const View = () => {
  const [location, setLocation] = useState(null);
  const [characters, setCharacters] = useState([]);

  const { id } = useParams();

  const {
    data: locationData,
    isLoading,
    notFound,
  } = useFetch(() => read("/location", id));

  const clearCharacters = location?.residents?.map((resident) =>
    resident.split("/").pop()
  );
  const { data: charactersData, refresh: refreshCharacters } = useFetch(() =>
    clearCharacters ? readList("/character", clearCharacters) : null
  );

  useEffect(() => {
    if (locationData) {
      setLocation(locationData);
    }

    if (location) {
      refreshCharacters();
    }
  }, [locationData, location]);

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
            <LocationSpecifications location={location} />
          </Grid>
        </Grid>

        <Stack direction="column" pt={6} spacing={3}>
          <Typography variant="h2">Residents of {location?.name}</Typography>

          <CharacterList characters={characters} />
        </Stack>
      </Stack>
    </PageLayout>
  );
};

export default View;
