import React, { useEffect, useState } from "react";

import { Stack, Typography } from "@mui/material";
import { ButtonMenu, PageLayout } from "../../app/components";

import { useFetch } from "../../app/hooks";
import { list } from "../../app/utils/api";
import { EpisodeList } from "../components";
import { filterEpisodes, getAllSeasons } from "../utils/filters";

const List = () => {
  const [allEpisodes, setAllEpisodes] = useState([]);
  const [selectedSeasons, setSelectedSeasons] = useState([]);
  const { data, isLoading, notFound } = useFetch(() => list("/episode"));

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
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
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

        <EpisodeList episodes={filteredEpisodes} size={6} />
      </Stack>
    </PageLayout>
  );
};

List.defaultProps = {};
List.propTypes = {};

export default List;
