import ratingStar from "/star.svg";

type RaitingTypes = {
  rating?: number
}

const Rating = ({ rating }:RaitingTypes) => {
  return (
    <div className="mt-6 flex justify-center lg:justify-start">
      {rating ? (
        <div className="h-5 max-w-30 flex items-center justify-evenly rounded-sm border-1 border-solid p-5 font-medium text-amber-400 md:p-3.5 md:text-[2vw] lg:max-w-25 lg:text-[1.2vw] xl:text-[1.2vw] 2xl:max-w-50 2xl:text-[.8vw] text-[3.5vw] sm:text-[3vw]">
          {rating}
          <img
            src={ratingStar}
            alt="Rating star"
            draggable={false}
            className="max-h-6 max-w-6 md:max-h-5 md:max-w-5 lg:max-h-4 lg:max-w-4 xl:max-w-5 xl:max-h-5 flex items-end"
          />
        </div>
      ) : (
        <p className="border-solid border-1 p-2.5 text-amber-400 font-medium max-w-80 h-6 items-center flex justify-evenly rounded-sm">Raiting for this movie does not exist</p>
      )}
    </div>
  )
}

export default Rating