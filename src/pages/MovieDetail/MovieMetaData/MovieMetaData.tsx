import Genres from "./Genres/Genres"
import MovieRuntime from "./MovieRuntime/MovieRuntime"
import ProductionCountries from "./ProductionCountries/ProductionCountries"
import Rating from "./Rating/Rating"
import { MovieMetaDataProps } from "../../../types/movie.types"


const MovieMetaData = ({runtime, release_date, genres, production_countries, vote_average}: MovieMetaDataProps) => {
  return (
    <div className="mt-5 md:mt-5 lg:mt-3">
      <MovieRuntime runtime={runtime} release_date={release_date}/>
      <Genres genres={genres}/>
      <ProductionCountries production_countries={production_countries}/>
      <Rating rating={vote_average}/>
    </div>
  )
}

export default MovieMetaData