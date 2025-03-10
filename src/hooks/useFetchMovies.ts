import { useEffect, useState } from "react";
import { FilterProps,  MoviesResponse } from "../types/movie.types";
import { OPTIONS } from '../private/API.headers'


const useFetchMovies = ({ page, sortBy, genreId }: FilterProps) => {
  const [data, setData] = useState<MoviesResponse | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<null | string>(null);


  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true);

      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${sortBy}${genreId &&`&with_genres=${genreId}`}`, { ...OPTIONS, signal: controller.signal });
        const json = await response.json();

        if (!response.ok) {
          setError(`HTTP error, status: ${response.status}`)
        }

        setIsPending(false);
        setError(null);
        setData(json);

      } catch (err) {
        const error = err as Error
        if (error.name !== 'AbortError') {
          setError(`${error?.name} ~ ${error?.message}`);
        }
      }
    };

    fetchData();
    return () => controller.abort();

  }, [page, sortBy, genreId]); 

  return { data, isPending, error };
};

export default useFetchMovies;
