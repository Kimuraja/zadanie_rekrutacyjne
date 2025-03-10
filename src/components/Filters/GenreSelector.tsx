import { useFilter } from "./FilterContext";
import useFetchGenres from "../../hooks/useFetchGenres";
import { FormControl, InputLabel, Select, OutlinedInput, Box, Chip, MenuItem } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

const GenreSelector = () => {
  const { genre, setGenre } = useFilter();
  const { genres } = useFetchGenres();

  const handleChange = (event: SelectChangeEvent<number[]>) => setGenre(event.target.value as number[]);

  return (
    <FormControl sx={{ m: 1, width: 500 }}>
      <InputLabel id="genre-filter-label" sx={{ color: '#ada9af' }}>Genres</InputLabel>
      <Select<number[]>
        sx={{
          color: 'white',
          backgroundColor: 'transparent',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255,255,255,0.8)'
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
          },
          '& .MuiSvgIcon-root': {
            color: 'white'
          }
        }}
        
        labelId="genre-filter-label"
        id="genre-filter"
        multiple
        value={genre}
        onChange={handleChange}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: 'rgba(0,0,0,0.9)',
              color: 'white',
              '& .MuiMenuItem-root': {
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }
            }
          }
        }}
        input={
          <OutlinedInput 
            id="select-genres" 
            label="Genres" 
            sx={{ color: 'white' }}
          />
        }
        renderValue={(selectedGenre) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selectedGenre.map((value) => {
              const genre = genres?.find(genre => genre.id === value);
              return genre ? (
                <Chip 
                  key={value} 
                  label={genre.name} 
                  sx={{ 
                    color: 'white', 
                    backgroundColor: 'rgba(255,255,255,0.15)' 
                  }} 
                />
              ) : null;
            })}
          </Box>
        )}
      >
        {genres?.map((genre) => (
          <MenuItem 
            key={genre.id} 
            value={genre.id}
            sx={{ color: 'white' }}
          >
            {genre.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default GenreSelector;