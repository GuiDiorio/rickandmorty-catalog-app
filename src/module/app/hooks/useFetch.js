import { useEffect, useState } from "react";

const useFetch = (request) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const fetchData = async () => {
    setNotFound(false);

    try {
      const dataRequest = await request();
      setData(dataRequest?.results || dataRequest);
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
  }, []);

  return {
    data,
    isLoading,
    notFound,
    refresh: fetchData,
  };
};

export default useFetch;
