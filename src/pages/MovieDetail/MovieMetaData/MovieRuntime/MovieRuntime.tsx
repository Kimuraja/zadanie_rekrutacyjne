type RuntimeProps = {
  runtime?: number;
  release_date?: string;
};


const MovieRuntime = ({ runtime, release_date }: RuntimeProps) => {

  const formatRuntime = () => {
    if (!runtime) return null;

    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    return (
      <span>
        {hours > 0 && `${hours}hr `}
        {minutes}min
      </span>
    );
  };

  return (
    <div className="text-[3.5vw] text-[#ada9af] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw] 2xl:text-[1.1vw]">
      {release_date && <span>{release_date.split("-")[0]}</span>}
      
      {runtime && (
        <span className={release_date ? "ml-4" : ""}>
          {formatRuntime()}
        </span>
      )}
    </div>
  );
};

export default MovieRuntime;