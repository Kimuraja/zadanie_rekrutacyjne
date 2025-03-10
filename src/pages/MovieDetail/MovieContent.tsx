import Cast from "./Cast/Cast";
import MovieImage from "./MovieImage";
import MovieHeader from "./MovieHeader/MovieHeader";
import MovieMetaData from "./MovieMetaData/MovieMetaData";
import MovieDescription from "./MovieDescription/MovieDescription";
import { MovieContentProps } from "../../types/movieDetail.types";
import { useNavigate } from "react-router-dom";

const MovieContent = ({
  movieDetails,
  crewDetails,
  isPendingCrew,
}: MovieContentProps) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[2560px]">
      <button
        className="ml-4 mt-6 h-8 w-28 items-center justify-center rounded-sm border-1 border-solid bg-inherit font-medium text-amber-400 transition-all hover:bg-amber-400/10 active:scale-95 lg:ml-20 lg:mt-10 lg:h-10 lg:w-36 cursor-pointer"
        onClick={() => navigate("/")}
      >
        ← <span className="hidden sm:inline">Wróć</span>
      </button>

      <div className="m-10 md:m-15 lg:m-20 px-4 flex flex-col justify-center items-center text-center lg:flex-row lg:text-start lg:items-start lg:justify-start lg:mt-10 lg:ml-20 lg:px-0">
        <div className="mx-auto flex">
          <MovieImage
            poster_path={movieDetails?.poster_path}
            title={movieDetails?.title}
          />
        </div>

        <div className="mt-6 flex flex-col space-y-4 lg:m-10 lg:mt-0">
          <MovieHeader title={movieDetails?.title} crew={crewDetails?.crew} />

          <MovieMetaData
            runtime={movieDetails?.runtime}
            release_date={movieDetails?.release_date}
            genres={movieDetails?.genres}
            production_countries={movieDetails?.production_countries}
            vote_average={movieDetails?.vote_average}
          />

          <MovieDescription
            homepage={movieDetails?.homepage}
            overview={movieDetails?.overview}
          />
        </div>
      </div>

      {crewDetails?.cast && crewDetails?.cast?.length > 0 && (
        <div className="mt-40 lg:mt-3">
          <Cast cast={crewDetails?.cast} pending={isPendingCrew} />
        </div>
      )}
    </div>
  );
};

export default MovieContent;
