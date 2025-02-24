import {
  Grid2 as Grid,
  Stack,
  Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ButtonMenu, Card, PageLayout } from "../../app/components";

import { useFetch } from "../../app/hooks";
import { list } from "../../app/utils/api";
import { filterCharacters, getAllGenders, getAllSpecies, getAllStatus } from "../utils/filters";

const List = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [selectedSpecies, setSelectedSpecies] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState([]);

  const {
    data,
    isLoading,
    notFound,
  } = useFetch(() => list("/character"));

  useEffect(() => {
    if (data) {
      setAllCharacters(data);
    }
  }, [data]);

  const species = getAllSpecies(allCharacters);
  const genders = getAllGenders(allCharacters);
  const status = getAllStatus(allCharacters);

  const filteredCharacters = filterCharacters(
    allCharacters,
    selectedSpecies,
    selectedGenders,
    selectedStatus
  );

  if (isLoading) return <Typography>Loading...</Typography>;
  if (notFound) return <Typography>Not found</Typography>;

  return (
    <PageLayout>
      <Stack spacing={4} direction="column">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h1">Characters</Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body1">Filter By:</Typography>
            <ButtonMenu
              options={species}
              selectedOptions={selectedSpecies}
              setSelectedOptions={setSelectedSpecies}
              variant="text"
            >
              Species
            </ButtonMenu>
            <ButtonMenu
              options={genders}
              selectedOptions={selectedGenders}
              setSelectedOptions={setSelectedGenders}
              variant="text"
            >
              Genders
            </ButtonMenu>
            <ButtonMenu
              options={status}
              selectedOptions={selectedStatus}
              setSelectedOptions={setSelectedStatus}
              variant="text"
            >
              Status
            </ButtonMenu>
          </Stack>
        </Stack>

        <Grid
          container
          columnSpacing={2}
          rowSpacing={5}
          justifyContent="space-between"
        >
          {filteredCharacters?.map((character) => (
            <Grid size={6} key={character.id}>
              <Card
                variant="link"
                url={`/characters/${character.id}`}
                media={character.image}
                title={character.name}
                description={character.species}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </PageLayout>
  );
};

List.defaultProps = {};
List.propTypes = {};

export default List;
