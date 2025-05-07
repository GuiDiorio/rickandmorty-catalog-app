import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ButtonMenu, PageLayout } from "../../app/components";

import { useFetch, useQuery } from "../../app/hooks";
import { list } from "../../app/utils/api";
import { LocationList } from "../components";
import { getAllTypes, getAllDimensions } from "../utils/filters";
import { FILTERS } from "../../app/utils/filters";

const List = () => {
  const [allLocations, setAllLocations] = useState([]);
  const [locations, setLocations] = useState([]);
  const [pageData, setPageData] = useState({ page: 1, info: {} });

  const { query, updateQueryParams, areFiltersApplied } = useQuery();

  const { data, isLoading, notFound, refresh } = useFetch(() =>
    list(`/location?${query}`)
  );

  useEffect(() => {
    if (data) {
      setLocations(data.results || []);
      setPageData((prev) => ({ ...prev, info: data.info }));

      const hasFilters = areFiltersApplied(FILTERS.LOCATION);

      if (!hasFilters) {
        setAllLocations(data.results || []);
      }
    }
  }, [data]);

  const types = getAllTypes(allLocations);
  const dimensions = getAllDimensions(allLocations);

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
          <Typography variant="h1">Locations</Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body1">Filter By:</Typography>

            <ButtonMenu
              label="Type"
              options={types}
              onClickOption={(value) => updateQueryParams("type", value)}
              variant="text"
            />

            <ButtonMenu
              label="Dimension"
              options={dimensions}
              onClickOption={(value) => updateQueryParams("dimension", value)}
              variant="text"
            />
          </Stack>
        </Stack>

        <LocationList locations={locations} size={6} />

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
