type Overview = {
  overview?: string
}

const Overview = ({ overview }: Overview) => {
  return (
    <div className="flex justify-center lg:justify-start">
      {overview ? (
        <p className="mt-4 text-[4vw] font-light text-[#fff] sm:text-[3vw] md:max-w-[80%] md:text-[2vw] lg:mt-6 lg:text-[1.5vw] xl:mt-8 xl:max-w-[90%] xl:text-[1.5vw] 2xl:max-w-[70%] 2xl:text-[1.1vw]">
          {overview}
        </p>
      ) : (
        <p className="text-[#fff] font-light mt-5">
          There's no overview to display
        </p>
      )}
    </div>
  )
}

export default Overview