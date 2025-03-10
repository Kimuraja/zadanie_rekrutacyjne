import Overview from "./Overview/Overview"
import HomepageButton from "./HomepageButton/HomepageButton"

type MovieDescriptionProps = {
  homepage?: string
  overview?: string
}

const MovieDescription = ({ homepage, overview }: MovieDescriptionProps) => {
  return (
    <div className="mt-5 md:mt-5 lg:mt-3">
      <HomepageButton homepage={homepage}/>
      <Overview overview={overview}/>
    </div>
  )
}

export default MovieDescription