import { useEffect, useState } from "react";
import useFetchMovies from "../../hooks/useFetchMovies";
import { useFilter } from "../Filters/FilterContext";
import useFetchGenres from "../../hooks/useFetchGenres";
import { useNavigate } from "react-router-dom";
import noImage from "/noImage.svg";
import Loading from "../Loading/Loading";
import Filters from "../Filters/Filters";
import Error from "../Error/Error";


type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
};

const Movies = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);
  const { filter, genre } = useFilter();
  const { data, isPending, error } = useFetchMovies({
    page,
    sortBy: filter,
    genreId: genre,
  });
  const { genres } = useFetchGenres();
  const navigate = useNavigate();


  useEffect(() => {
    setPage(1);
    setMovies([]);
  }, [filter, genre]);


  useEffect(() => {
    if (data && data?.results) {
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
    }
  }, [data]);

  
  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
    if (bottom) {
      setPage((prev) => prev + 1)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll) 
  }, [])


  const handleMovieSelect = (id: string) => navigate(`/movie/${id}`);


  return (
    <>
      {error ? (
        <Error error={error} />
      ) : (
        <>
          <Filters />
          <ul className="flex justify-center items-top flex-row text-[#fff] flex-wrap py-[4rem]" onScroll={handleScroll}>
            {movies && movies.map(
              ({ id, poster_path, title, release_date, genre_ids }) => (
                <li
                  key={id}
                  className="mb-[4rem] h-auto p-2 mx-4 hover:scale-105 rounded-sm ease-in duration-100 cursor-pointer active:scale-100 hover:bg-gray-950"
                  onClick={() => handleMovieSelect(id.toString())}
                >
                  {poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                      alt={title}
                      draggable={false}
                      loading="lazy"
                      className="max-w-[16rem] h-auto "
                    />
                  ) : (
                    <img
                      src={noImage}
                      alt={title}
                      loading="lazy"
                      draggable={false}
                      className="max-w-[16rem] h-auto"
                    />
                  )}
                  <h2 className="font-bold text-[1rem] mt-[.5rem] w-[10vw] flex justify-start">
                    {title}
                  </h2>
                  <div className="flex flex-wrap max-w-[15rem] justify-start">
                    {genre_ids?.map((genreId) => {
                      const genre = genres?.find(genre => genre.id === genreId);
                      return genre ? (
                        <span
                          key={`${id}-${genre.id}`}
                          className="pr-[.5rem] text-[#767676]"
                        >
                          {genre.name}
                        </span>
                      ) : null;
                    })}
                  </div>
                  <span className="text-[#767676]">
                    {release_date && release_date?.split("-")[0]}
                  </span>
                </li>
              )
            )}
          </ul>
          <div className="flex justify-center align-center">{isPending && <Loading />}</div>
        </>
      )}
    </>
  );
};

export default Movies;
