import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ButtonMenu, PageLayout } from "../../app/components";

import { useFetch, useFilterParams } from "../../app/hooks";
import { list } from "../../app/utils/api";
import { EpisodeList } from "../components";
import { getAllSeasons } from "../utils/filters";
import { FILTERS } from "../../app/utils/filters";

const List = () => {
  const [allEpisodes, setAllEpisodes] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [pageData, setPageData] = useState({ page: 1, info: {} });

  const { query, updateParams, areFiltersApplied } = useFilterParams();

  const { data, isLoading, notFound, refresh } = useFetch(() =>
    list(`/episode?${query}`)
  );

  useEffect(() => {
    if (data) {
      setEpisodes(data.results || []);
      setPageData((prev) => ({ ...prev, info: data.info }));

      const hasFilters = areFiltersApplied(FILTERS.EPISODE);

      if (!hasFilters) {
        setAllEpisodes(data.results || []);
      }
    }
  }, [data]);

  const seasons = getAllSeasons(allEpisodes);

  useEffect(() => {
    refresh();
  }, [query]);

  const handlePageChange = (newPage) => {
    updateParams("page", [newPage.toString()]);
  };

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
              label="Season"
              options={seasons}
              onClickOption={(value) => updateParams("season", value)}
              variant="text"
            />
          </Stack>
        </Stack>

        <EpisodeList episodes={episodes} size={6} />

        {/* Navigation logic will be refactored in the future */}
        {/* <ButtonPagination
          onRefresh={handlePageChange}
          pageData={{ currentPage: pageData.page, ...pageData.info }}
        /> */}
      </Stack>
    </PageLayout>
  );
};

List.defaultProps = {};
List.propTypes = {};

export default List;
