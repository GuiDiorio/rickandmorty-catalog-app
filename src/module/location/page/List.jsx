import React, { useEffect, useState } from "react";

import { Grid2 as Grid, Stack, Typography } from "@mui/material";
import { ButtonMenu, Card, PageLayout } from "../../app/components";

import { useFetch } from "../../app/hooks";
import { list } from "../../app/utils/api";
import { getAllDimensions, getAllTypes, filterLocations } from "../utils/filters";

const List = () => {
  const [allLocations, setAllLocations] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedDimensions, setSelectedDimensions] = useState([]);

  const {
    data,
    isLoading,
    notFound,
  } = useFetch(() => list("/location"));

  useEffect(() => {
    if (data) {
      setAllLocations(data);
    }
  }, [data]);

  const types = getAllTypes(allLocations);
  const dimensions = getAllDimensions(allLocations);

  const filteredLocations = filterLocations(allLocations, selectedTypes, selectedDimensions); 

  if (isLoading) return <Typography>Loading...</Typography>;
  if (notFound) return <Typography>Not found</Typography>;

  return (
    <PageLayout>
      <Stack spacing={4} direction="column">
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h1">Locations</Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body1">Filter By:</Typography>
            <ButtonMenu
              options={types}
              selectedOptions={selectedTypes}
              setSelectedOptions={setSelectedTypes}
              variant="text"
            >
              Types 
            </ButtonMenu>
            <ButtonMenu
              options={dimensions}
              selectedOptions={selectedDimensions}
              setSelectedOptions={setSelectedDimensions}
              variant="text"
            >
              Dimensions
            </ButtonMenu>
          </Stack>
        </Stack>
      
        <Grid
          container
          direction="row"
          columnSpacing={2}
          rowSpacing={5}
          justifyContent="space-between"
        >
          {filteredLocations.map((location) => (
            <Grid size={6} key={location.id}>
              <Card
                variant="link"
                url={`/locations/${location.id}`}
                media={location.image}
                title={location.name}
                description={`${location.type}/${location.dimension}`}
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
