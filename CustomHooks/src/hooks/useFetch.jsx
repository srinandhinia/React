import { useState, useEffect } from "react";
export function useFetch(fetchFunction, initialValue) {
  const [fetchedData, setFetchedData] = useState(initialValue);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const places = await fetchFunction();
        setFetchedData(places);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data" });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFunction]);

  return {
    fetchedData,
    isFetching,
    error,
    setFetchedData,
  };
}
