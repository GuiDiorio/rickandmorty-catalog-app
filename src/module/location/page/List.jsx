import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ButtonMenu, PageLayout, Pagination } from "../../app/components";

import { useFetch, useQuery } from "../../app/hooks";
import { list } from "../../app/utils/api";
import { LocationList } from "../components";
import { FILTERS } from "../../app/utils/filters";

const List = () => {
  const [locations, setLocations] = useState([]);

  const { query, updateQueryParams, pageInfo, setPageInfo, getCurrentPage } =
    useQuery();

  const { data, isLoading, notFound, refresh } = useFetch(() =>
    list(`/location?${query}`)
  );

  useEffect(() => {
    if (data) {
      setLocations(data.results || []);

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
          <Typography variant="h1">Locations</Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body1">Filter By:</Typography>

            <ButtonMenu
              label="Type"
              options={FILTERS.LOCATION.type}
              onClickOption={(value) => updateQueryParams("type", value)}
              variant="text"
            />

            <ButtonMenu
              label="Dimension"
              options={FILTERS.LOCATION.dimension}
              onClickOption={(value) => updateQueryParams("dimension", value)}
              variant="text"
            />
          </Stack>
        </Stack>

        <LocationList locations={locations} size={6} />

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
