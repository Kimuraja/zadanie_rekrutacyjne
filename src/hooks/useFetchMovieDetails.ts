import { useEffect, useState } from "react"
import { OPTIONS } from '../private/API.headers'


const useFetchMovieDetails = (id: string) => {
  const [movieDetails, setMovieDetails] = useState(null)
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const controller = new AbortController();
    
    const fetchGenres = async () => {
      setIsPending(true)

      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, { ...OPTIONS, signal: controller.signal })
        const json = await response.json()

        if (!response.ok) {
          setError(`HTTP error, status: ${response.status}`)
        }

        setIsPending(false);
        setError(null);
        setMovieDetails(json);

      } catch (err) {
        const error = err as Error
        if (error.name !== 'AbortError') {
          setError(`${error?.name} ~ ${error?.message}`);
        }
      }
    }

    fetchGenres()
    return () => controller.abort()
  }, [id])

  return { movieDetails, isPending, error}
}

export default useFetchMovieDetails