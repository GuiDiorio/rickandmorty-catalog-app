import React, { useEffect, useState } from "react";

import { Stack, Typography } from "@mui/material";
import { ButtonMenu, ButtonPagination, PageLayout } from "../../app/components";

import { useFetch } from "../../app/hooks";
import { list } from "../../app/utils/api";
import { EpisodeList } from "../components";
import { filterEpisodes, getAllSeasons } from "../utils/filters";

const List = () => {
  const [allEpisodes, setAllEpisodes] = useState([]);
  const [selectedSeasons, setSelectedSeasons] = useState([]);

  const [pageData, setPageData] = useState({
    page: 1,
    info: {},
  });

  const { data, isLoading, notFound, refresh } = useFetch(() =>
    list("/episode", pageData.page)
  );

  useEffect(() => {
    if (data) {
      setAllEpisodes(data.results || []);
      setPageData({ ...pageData, info: data.info });
    }
  }, [data, pageData.page]);

  useEffect(() => {
    if (pageData.page) {
      refresh();
    }
  }, [pageData.page]);

  const handlePageChange = (newPage) => {
    setPageData({ ...pageData, page: newPage });
  };

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
        <ButtonPagination
          onRefresh={handlePageChange}
          pageData={{ currentPage: pageData.page, ...pageData.info }}
        />
      </Stack>
    </PageLayout>
  );
};

List.defaultProps = {};
List.propTypes = {};

export default List;
