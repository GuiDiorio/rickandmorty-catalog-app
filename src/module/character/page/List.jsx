import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ButtonMenu, PageLayout } from "../../app/components";

import { useFetch, useQuery } from "../../app/hooks";
import { list } from "../../app/utils/api";
import { CharacterList } from "../components";
import { getAllGenders, getAllSpecies, getAllStatus } from "../utils/filters";

import { FILTERS } from "../../app/utils/filters";

const List = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [pageData, setPageData] = useState({ page: 1, info: {} });

  const { query, updateQueryParams, areFiltersApplied } = useQuery();

  const { data, isLoading, notFound, refresh } = useFetch(() =>
    list(`/character?${query}`)
  );

  useEffect(() => {
    if (data) {
      setCharacters(data.results || []);
      setPageData((prev) => ({ ...prev, info: data.info }));

      const hasFilters = areFiltersApplied(FILTERS.CHARACTER);

      if (!hasFilters) {
        setAllCharacters(data.results || []);
      }
    }
  }, [data]);

  const species = getAllSpecies(allCharacters);
  const genders = getAllGenders(allCharacters);
  const status = getAllStatus(allCharacters);

  useEffect(() => {
    refresh();
  }, [query]);

  const handlePageChange = (newPage) => {
    updateQueryParams("page", [newPage.toString()]);
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
          <Typography variant="h1">Characters</Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body1">Filter By:</Typography>

            <ButtonMenu
              label="Species"
              options={species}
              onClickOption={(value) => updateQueryParams("species", value)}
              variant="text"
            />

            <ButtonMenu
              label="Gender"
              options={genders}
              onClickOption={(value) => updateQueryParams("gender", value)}
              variant="text"
            />

            <ButtonMenu
              label="Status"
              options={status}
              onClickOption={(value) => updateQueryParams("status", value)}
              variant="text"
            />
          </Stack>
        </Stack>

        <CharacterList characters={characters} size={6} />

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
