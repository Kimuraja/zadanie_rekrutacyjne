export type ProductionCountry = {
  iso_3166_1: string;
  name: string;
}

export type Genre = {
  id?: number;
  name?: string;
}

export type CastMember = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  profile_path?: string;
  character: string;
}

export type CrewMember = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  profile_path?: string;
  department: string;
  job: string;
}

export type CrewDetails = {
  id?: number;
  cast?: CastMember[];
  crew?: CrewMember[];
}

export type MovieDetails = {
  genres: Genre[];
  homepage: string;
  id: number;
  overview: string;
  poster_path?: string;
  production_countries: ProductionCountry[];
  release_date: string;
  runtime: number;
  title?: string;
  vote_average: number;
}

export type MovieContentProps = {
  movieDetails?: MovieDetails | null;
  crewDetails?: CrewDetails | null;
  isPendingCrew: boolean;
  errorCrew: Error | null | string;
}