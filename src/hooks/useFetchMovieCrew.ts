import { useEffect, useState } from "react"
import { OPTIONS } from '../private/API.headers'


const useFetchMovieCrew = (id: string) => {
  const [crewDetails, setCrewDetails] = useState(null)
  const [isPendingCrew, setIsPendingCrew] = useState(false);
  const [errorCrew, setErrorCrew] = useState<null | string>(null);

  useEffect(() => {
    const controller = new AbortController();
    
    const fetchGenres = async () => {
      setIsPendingCrew(true)

      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, { ...OPTIONS, signal: controller.signal })
        const json = await response.json()

        if (!response.ok) {
          setErrorCrew(`HTTP error, status: ${response.status}`)
        }

        setIsPendingCrew(false);
        setErrorCrew(null);
        setCrewDetails(json)

      } catch (err) {
        const error = err as Error
        if (error.name !== 'AbortError') {
          setErrorCrew(`${error?.name} ~ ${error?.message}`);
        }
      }
    }

    fetchGenres()
    return () => controller.abort()
  }, [id])

  return { crewDetails, isPendingCrew, errorCrew}
}

export default useFetchMovieCrew