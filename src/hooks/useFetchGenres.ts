import { useEffect, useState } from "react"
import { Genre } from "../types/movieDetail.types";
import { OPTIONS } from '../private/API.headers'


const useFetchGenres = () => {
  const [genres, setGenres] = useState<Genre[] | null>(null)
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchGenres = async () => {
      setIsPending(true)

      try {
        const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', OPTIONS)
        const json = await response.json()

        if (!response.ok) {
          setError(new Error(`HTTP error, status: ${response.status}`))
        }

        setIsPending(false);
        setError(null);
        setGenres(json?.genres);

      } catch (err) {
        const error = err as Error
        if (error.name !== 'AbortError') {
          setError(new Error(`Error: type ${error?.name}, message: ${error?.message}`));
        }
      }
    }

    fetchGenres()
    return () => controller.abort()
  }, [])

  return { genres, isPending, error}
}

export default useFetchGenres