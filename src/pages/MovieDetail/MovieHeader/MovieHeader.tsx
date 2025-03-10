import MovieDirector from "./MovieDirector/MovieDirector";
import MovieTitle from "./MovieTitle/MovieTitle";

type CrewMember = {
  name: string;
  job: string; 
};

type MovieHeaderProps = {
  title?: string;
  crew?: CrewMember[];
};

const MovieHeader = ({ title, crew }: MovieHeaderProps) => {
  return (
    <div>
      <MovieTitle title={title} />
      <MovieDirector directors={crew} />
    </div>
  );
};

export default MovieHeader;