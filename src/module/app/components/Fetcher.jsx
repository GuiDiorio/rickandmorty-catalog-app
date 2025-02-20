import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Fetcher = ({ request, children }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const fetchData = async () => {
    setNotFound(false);

    try {
      const dataRequest = await request();
      setData(dataRequest.results || dataRequest);
    } catch (error) {
      console.error(error);
      const status = error?.response?.status;

      if (status && status === 404) {
        setNotFound(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isLoading) setIsLoading(true);
    fetchData();
  }, [request]);

  console.log(data);

  const refresh = fetchData;

  if (isLoading) return <Typography>Loading...</Typography>;

  if (notFound) return <Typography>Not found</Typography>;

  return data ? children({ data, refresh }) : <></>;
};

export default Fetcher;
