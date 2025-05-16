import { useState, useMemo } from "react";

const useQuery = () => {
  const [queryParams, setQueryParams] = useState([]);
  const [pageInfo, setPageInfo] = useState({
    pages: undefined,
    current: undefined,
  });

  const updateQueryParams = (key, value) => {
    const isPage = key === "page";

    const filteredParams = queryParams.filter(
      (param) => param.key !== key && (isPage || param.key !== "page")
    );

    const newParam = { key, value };

    const nextParams = [
      ...filteredParams,
      newParam,
      ...(!isPage ? [{ key: "page", value: 1 }] : []),
    ];

    setQueryParams(nextParams);
  };

  const query = useMemo(() => {
    const urlQuery = new URLSearchParams();
    const hasPage = queryParams.some((param) => param.key === "page");

    queryParams.forEach((param) => {
      urlQuery.append(param.key, param.value);
    });

    if (!hasPage) {
      urlQuery.append("page", 1);
    }

    return urlQuery.toString();
  }, [queryParams]);

  const getCurrentPage = () => {
    const pageParam = queryParams.find((param) => param.key === "page");
    return pageParam ? Number(pageParam.value) : 1;
  };

  return {
    queryParams,
    updateQueryParams,
    query,
    pageInfo,
    setPageInfo,
    getCurrentPage,
  };
};

export default useQuery;
