import { useState } from "react";

const useFilterParams = () => {
  const urlFilterParams = new URLSearchParams();

  const [params, setParams] = useState([]);

  const updateParams = (key, value) =>
    setParams((prev) => {
      const filtered = prev.filter((param) => param.key !== key);
      const updated = { key, value };

      return [...filtered, updated];
    });

  params.forEach((param) => {
    urlFilterParams.append(param.key, param.value);
  });

  const query = urlFilterParams.toString();
  console.log({ query });

  const areFiltersApplied = (filters) =>
    params.some((param) => filters.includes(param.key));

  return {
    params,
    setParams,
    query,
    updateParams,
    areFiltersApplied,
  };
};

export default useFilterParams;
