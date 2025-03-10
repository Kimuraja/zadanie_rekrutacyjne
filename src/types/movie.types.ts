import { Genre } from "./movieDetail.types";

export type FilterProps = {
  page: number;
  sortBy: string;
  genreId: number[];
};

export type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
};

export type MoviesResponse = {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[];
};


export type MovieMetaDataProps = {
  genres?: Genre[]
  runtime?: number;
  release_date?: string;
  vote_average?: number
  production_countries?: { 
    iso_3166_1: string;
    name: string;
  }[];
}