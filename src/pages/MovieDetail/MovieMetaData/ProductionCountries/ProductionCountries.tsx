type Countries = {
  production_countries?: { 
    iso_3166_1: string;
    name: string;
  }[];
}

const ProductionCountries = ({ production_countries = [] }: Countries) => {
  return (
    <div className="mt-.5 flex justify-center lg:justify-start">
      {production_countries && production_countries.length > 0 ? <ul className="mt-1 flex flex-col items-center font-medium text-[3.5vw] text-[#ada9af] sm:text-[3vw] md:text-[2vw] lg:flex-row lg:text-[1.5vw] xl:text-[1.2vw] 2xl:text-[1.1vw]">
        Production countries:
        {production_countries.map((country) => (
          <li
            key={country.name}
            className="text-[#767676] mr-1 first:ml-[.5rem] after:content-[','] last:after:content-[''] flex font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw]"
          >
            {country.name}
          </li>
        ))}
      </ul> : <p className="flex text-[#ada9af] font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw]">Production countries are unknown</p>}
    </div>
  )
}

export default ProductionCountries