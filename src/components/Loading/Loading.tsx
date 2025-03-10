import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center'
    }}>
      <CircularProgress size="100px"/>
    </Box>
  )
}

export default Loading