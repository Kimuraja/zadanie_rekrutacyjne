import { Genre } from "../../../../types/movieDetail.types";

type GenresProps = {
  genres?: Genre[]
};

const Genres = ({genres}: GenresProps) => {
  return (
    <div className="mt-.5 flex justify-center lg:justify-start">
      {genres && <ul className="mt-2 flex text-[3.5vw] font-medium text-[#ada9af] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw] 2xl:text-[1.1vw]">
        {genres?.map((genre) => (
          <li
            key={genre.id}
            className="mr-1 after:content-[','] last:after:content-['']"
          >
            {genre.name}
          </li>
        ))}
      </ul>}
    </div>
  )
}

export default Genres