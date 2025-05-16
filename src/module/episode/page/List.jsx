import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ButtonMenu, PageLayout, Pagination } from "../../app/components";

import { useFetch, useQuery } from "../../app/hooks";
import { list } from "../../app/utils/api";
import { EpisodeList } from "../components";
import { FILTERS } from "../../app/utils/filters";

const List = () => {
  const [episodes, setEpisodes] = useState([]);

  const { query, updateQueryParams, pageInfo, setPageInfo, getCurrentPage } =
    useQuery();

  const { data, isLoading, notFound, refresh } = useFetch(() =>
    list(`/episode?${query}`)
  );

  useEffect(() => {
    if (data) {
      setEpisodes(data.results || []);

      setPageInfo({
        pages: data.info.pages,
        current: getCurrentPage(),
      });
    }
  }, [data]);

  useEffect(() => {
    refresh();
  }, [query]);

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
              options={FILTERS.EPISODE.season}
              onClickOption={(value) => updateQueryParams("season", value)}
              variant="text"
            />
          </Stack>
        </Stack>

        <EpisodeList episodes={episodes} size={6} />

        <Pagination
          count={pageInfo.pages}
          page={pageInfo.current}
          onChange={(event, value) => updateQueryParams("page", value)}
        />
      </Stack>
    </PageLayout>
  );
};

List.defaultProps = {};
List.propTypes = {};

export default List;
