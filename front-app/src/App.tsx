// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Movies from './components/Movies';
import MoviesSearch from './components/MoviesSearch';
import MoviesViewer from './components/MoviesViewer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/MoviesSearch" element={<MoviesSearch />} />
        <Route path="/MoviesSearch/:category" element={<MoviesSearch />} />
        <Route path="/MoviesViewer/:id" element={<MoviesViewer />} />
        <Route path="/MoviesViewer/search/:search" element={<MoviesViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
