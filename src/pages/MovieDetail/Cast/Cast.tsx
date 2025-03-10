import { useRef, useState, useEffect } from "react";
import { CastMember } from "../../../types/movieDetail.types";
import noPersonImage from "/noPersonImage.svg"
import Loading from "../../../components/Loading/Loading";


type Cast = {
  cast: CastMember[] | null;
  pending: boolean;
};


const Cast = ({ cast, pending }: Cast) => {
  const listRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const slideAmount = 1000;
  const [maxOffset, setMaxOffset] = useState(0);

  useEffect(() => {
    if (listRef.current && containerRef.current) {
      const listWidth = listRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;
      setMaxOffset(Math.max(0, listWidth - containerWidth));
    }
  }, [cast]);

  const handleNext = () => {
    setOffset((prevOffset) => {
      const newOffset = Math.min(prevOffset + slideAmount, maxOffset);
      return newOffset;
    });
  };

  const handlePrev = () => setOffset((prevOffset) => Math.max(prevOffset - slideAmount, 0));


  return (
    <div className="xl:mt-40 mt-10 overflow-hidden m-4 lg:px-10 lg:p-0" ref={containerRef}>
      <div className="flex items-center space-x-2 sm:mr-10 md:mr-20 justify-between ">
        <h1 className="text-[#fff] text-[2rem] font-bold max-w-1/2 float-start sm:ml-10">
          Cast:
        </h1>
        <div className="[&>*]:pr-2">
          <button
            onClick={handlePrev}
            disabled={offset === 0}
            aria-label="Previous cast"
            className="text-[#fff] text-[1.5rem] rounded disabled:opacity-50 cursor-pointer"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            disabled={offset === maxOffset}
            aria-label="Next cast"
            className="text-[#fff] text-[1.5rem] rounded disabled:opacity-50 cursor-pointer"
          >
            →
          </button>
        </div>
      </div>
      <div className="overflow-hidden mt-10">
        <ul
          ref={listRef}
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {cast && !pending ? (cast?.map((member) => (
            <li key={member.id} className="mr-[3rem]">
              <ul className="min-w-60 flex items-center justify-center flex-col">
                {member.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
                    alt={member.name}
                    draggable={false}
                    className="min-w-50 h-50 lg:min-w-60 lg:h-60 my-3 rounded-[50rem] object-cover"
                  />
                ) : (
                  <img
                    src={noPersonImage}
                    alt="No person image"
                    draggable={false}
                    className="min-w-50 h-50 lg:min-w-60 lg:h-60 my-3 rounded-[50rem] object-cover"
                  />
                )}
                <div className="flex justify-center items-center text-center flex-col">
                  <li className="text-[#ada9af] text-[1.2rem]">
                    {member.name}
                  </li>
                  <li className="text-[#767676] text-[1.2rem]">
                    {member.character}
                  </li>
                </div>
              </ul>
            </li>
            ))
          ) : ( 
            <Loading /> 
          )}
        </ul>
      </div>
    </div>
  );
};

export default Cast;
