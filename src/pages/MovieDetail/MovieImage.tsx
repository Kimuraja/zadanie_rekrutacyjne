import noImage from '/noImage.svg'

type MovieImageProps = { 
  poster_path?: string,
  title?: string
}

const MovieImage = ({poster_path, title}: MovieImageProps) => {
  return (
    <div>
      {poster_path ?
        (<img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        loading="lazy"
        className="max-w-[100%] max-h-[100%] lg:max-w-[35vw]"
        draggable={false}
      />)
      : (
        <img
        src={noImage}
        alt={title}
        loading="lazy"
        className="max-h-[100%] lg:max-w-[35vw]"
        draggable={false}
      />)}
    </div>
  )
}

export default MovieImage