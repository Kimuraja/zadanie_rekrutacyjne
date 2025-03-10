import SortSelector from "./SortSelector"
import GenreSelector from "./GenreSelector"


const Filters = () => {
  return (
    <div className="flex justify-center items-center [&>*]:mr-10 ">
      <SortSelector />
      <GenreSelector />
    </div>
  )
}

export default Filters