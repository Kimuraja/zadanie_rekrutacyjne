type Title = {
  title?: string
}

const MovieTitle = ({title}: Title) => {
  return (
    <>
      {title && title ? <h2 className="mt-5 text-[10vw] font-medium leading-none text-[#fff] sm:m-0 sm:text-[8vw] md:text-[6vw] lg:text-[4vw]">
        {title}
      </h2> : <p>Could not load a title</p>}
    </>
  )
}

export default MovieTitle