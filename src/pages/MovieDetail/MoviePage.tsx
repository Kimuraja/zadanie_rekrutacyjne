import { useParams } from "react-router-dom";
import useFetchMovieDetails from "../../hooks/useFetchMovieDetails";
import Loading from "../../components/Loading/Loading";
import useFetchMovieCrew from "../../hooks/useFetchMovieCrew";
import MovieContent from "./MovieContent";
import Error from "../../components/Error/Error";

const MoviePage = () => {
  const { id } = useParams();
  const { movieDetails, isPending, error } = useFetchMovieDetails(id as string);
  const { crewDetails, isPendingCrew, errorCrew } = useFetchMovieCrew(
    id as string
  );

  return (
    <div className="mb-20">
      {error ? (
        <Error error={error}/> 
      ) : isPending ? (
        <Loading />
      ) : (
        <MovieContent
          movieDetails={movieDetails}
          crewDetails={crewDetails}
          isPendingCrew={isPendingCrew}
          errorCrew={errorCrew}
        />
      )}
    </div>
  );
};

export default MoviePage;
