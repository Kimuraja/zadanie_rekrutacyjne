import { Box, FormControl, InputLabel, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useFilter } from "./FilterContext";

const SORT_VALUE = [
  { value: "popularity.desc", name: "Popularity descending" },
  { value: "popularity.asc", name: "Popularity ascending" },
  { value: "title.desc", name: "Title descending " },
  { value: "title.asc", name: "Title ascending " },
  { value: "vote_count.desc", name: "Vote descending " },
  { value: "vote_count.asc", name: "Vote ascending " },
  { value: "primary_release_date.desc", name: "Release Date descending" },
  { value: "primary_release_date.asc", name: "Release Date ascending" },
];

const SortSelector = () => {
  const { filter, setFilter } = useFilter();

  const handleChange = (event: SelectChangeEvent) =>
    setFilter(event.target.value as string);

  return (
    <Box sx={{ maxWidth: 300, width: 300 }}>
      <FormControl fullWidth>
        <InputLabel
          id="sortByLabel"
          sx={{
            color: "#ada9af",
            "&.Mui-focused": { color: "white" },
          }}
        >
          Sort by
        </InputLabel>
        <Select
          sx={{
            color: '#ada9af',
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
          labelId="sortByLabel"
          id="sortBy"
          value={filter}
          label="SortBy"
          onChange={handleChange}
        >
          {SORT_VALUE.map((sort) => (
            <MenuItem 
              value={sort.value} 
              key={sort.value}
              sx={{ color: 'white' }}
            >
              {sort.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortSelector;
