import { useState } from "react";

const urlQuery = new URLSearchParams();

const useQuery = () => {
  const [queryParams, setQueryParams] = useState([]);

  const updateQueryParams = (key, value) =>
    setQueryParams((prev) => {
      const filtered = prev.filter((param) => param.key !== key);
      const updated = { key, value };

      return [...filtered, updated];
    });

  queryParams.forEach((param) => {
    urlQuery.append(param.key, param.value);
  });

  const queryString = urlQuery.toString();
  console.log({ queryString });

  const areFiltersApplied = (filters) =>
    queryParams.some((param) => filters.includes(param.key));

  return {
    queryParams,
    setQueryParams,
    queryString,
    updateQueryParams,
    areFiltersApplied,
  };
};

export default useQuery;
