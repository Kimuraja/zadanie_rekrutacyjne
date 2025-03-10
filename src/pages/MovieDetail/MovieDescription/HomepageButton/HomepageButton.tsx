type Homepage = {
  homepage?: string;
};

const HomepageButton = ({ homepage }: Homepage) => {
  return (
    <div className="flex justify-center lg:justify-start">
      {homepage && (
        <a href={homepage} className="flex max-w-50">
          <button className="bg-amber-400 flex h-12 w-50 cursor-pointer items-center justify-center rounded-sm font-medium text-[#1c1c1c] transition-all hover:bg-inherit hover:border-1 hover:border-solid hover:text-amber-400 mt-10 text-[3.5vw] sm:text-[3vw] md:text-[2.5vw] lg:h-11 lg:w-40 lg:text-[1.2vw] xl:h-10 xl:w-35 xl:text-[1.2vw] 2xl:h-12 2xl:w-45 2xl:text-[1vw]">
            Homepage
          </button>
        </a>
      )}
    </div>
  );
};

export default HomepageButton;
