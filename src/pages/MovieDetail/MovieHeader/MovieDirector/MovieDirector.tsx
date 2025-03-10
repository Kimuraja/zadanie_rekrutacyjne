type CrewMember = {
  name: string;
  job: string; 
};

type DirectorProps = {
  directors?: CrewMember[]; 
};

const MovieDirector = ({ directors }: DirectorProps) => {
  return (
    <div className="mt-2 text-[3.5vw] text-[#ada9af] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw] 2xl:text-[1vw]">
      Directed by: 
      {directors?.length && directors?.filter(member => member.job === "Director") ?
        directors?.map((member) => {
          if (member?.job === "Director") {
            return <span key={member?.name}> {member?.name}</span>;
          }
        })
      : <span> No directors were found</span>}
    </div>
  )
}

export default MovieDirector