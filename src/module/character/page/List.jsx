import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ButtonMenu, PageLayout, Pagination } from "../../app/components";

import { useFetch, useQuery } from "../../app/hooks";
import { list } from "../../app/utils/api";
import { CharacterList } from "../components";
import { FILTERS } from "../../app/utils/filters";

const List = () => {
  const [characters, setCharacters] = useState([]);

  const { query, updateQueryParams, pageInfo, setPageInfo, getCurrentPage } =
    useQuery();

  const { data, isLoading, notFound, refresh } = useFetch(() =>
    list(`/character?${query}`)
  );

  useEffect(() => {
    if (data) {
      setCharacters(data.results || []);

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
          <Typography variant="h1">Characters</Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body1">Filter By:</Typography>

            <ButtonMenu
              label="Species"
              options={FILTERS.CHARACTER.species}
              onClickOption={(value) => updateQueryParams("species", value)}
              variant="text"
            />
            <ButtonMenu
              label="Gender"
              options={FILTERS.CHARACTER.gender}
              onClickOption={(value) => updateQueryParams("gender", value)}
              variant="text"
            />
            <ButtonMenu
              label="Status"
              options={FILTERS.CHARACTER.status}
              onClickOption={(value) => updateQueryParams("status", value)}
              variant="text"
            />
          </Stack>
        </Stack>

        <CharacterList characters={characters} size={6} />

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
