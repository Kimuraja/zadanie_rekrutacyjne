/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

type FilterContextType = {
  filter: string;
  genre: number[];
  setFilter: (filter: string) => void;
  setGenre: (genre: number[]) => void;
};

const FilterContext = createContext<FilterContextType>({
  filter: '',
  genre: [],
  setFilter: () => {},
  setGenre: () => {}
});

export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [filter, setFilter] = useState('popularity.desc');
  const [genre, setGenre] = useState<number[]>([]);

  return (
    <FilterContext.Provider value={{ genre, setGenre, filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};