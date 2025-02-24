import React, { useEffect, useState } from "react";

import { Grid2 as Grid, Stack, Typography } from "@mui/material";
import { ButtonMenu, Card, PageLayout } from "../../app/components";

import { useFetch } from "../../app/hooks";
import { list } from "../../app/utils/api";
import { filterEpisodes, getAllSeasons } from "../utils/filters";

const List = () => {
  const [allEpisodes, setAllEpisodes] = useState([]);
  const [selectedSeasons, setSelectedSeasons] = useState([]);
  const {
    data,
    isLoading,
    notFound,
  } = useFetch(() => list("/episode"));

  useEffect(() => {
    if (data) {
      setAllEpisodes(data);
    }
  }, [data]);

  const seasons = getAllSeasons(allEpisodes);

  const filteredEpisodes = filterEpisodes(allEpisodes, selectedSeasons);

  if (isLoading) return <Typography>Loading...</Typography>;
  if (notFound) return <Typography>Not found</Typography>;

  return (
    <PageLayout>
      <Stack spacing={4} direction="column">
        
          <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h1">Episodes</Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body1">Filter By:</Typography>
            <ButtonMenu
              variant="text"
              options={seasons}
              selectedOptions={selectedSeasons}
              setSelectedOptions={setSelectedSeasons}
            >
              Seasons
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
            {filteredEpisodes.map((episode) => (
              <Grid size={6} key={episode.id}>
                <Card
                  variant="link"
                  url={`/episodes/${episode.id}`}
                  title={episode.name}
                  description={episode.episode}
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
