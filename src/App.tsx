import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import MoviePage from './pages/MovieDetail/MoviePage'
import { FilterProvider } from './components/Filters/FilterContext'

function App() {
  return (
    <FilterProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:id' element={<MoviePage />}/>
      </Routes>
    </FilterProvider>
  );
}

export default App
