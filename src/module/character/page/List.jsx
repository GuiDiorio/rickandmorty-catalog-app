import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ButtonMenu, ButtonPagination, PageLayout } from "../../app/components";

import { useFetch } from "../../app/hooks";
import { list } from "../../app/utils/api";
import { CharacterList } from "../components";
import {
  filterCharacters,
  getAllGenders,
  getAllSpecies,
  getAllStatus,
} from "../utils/filters";

const List = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [selectedSpecies, setSelectedSpecies] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [pageData, setPageData] = useState({
    page: 1,
    info: {},
  });

  const { data, isLoading, notFound, refresh } = useFetch(() =>
    list("/character", pageData.page)
  );

  useEffect(() => {
    if (data) {
      setAllCharacters(data.results || []);
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

        <CharacterList characters={filteredCharacters} size={6} />

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
