// src/App.tsx
import React from 'react';
import Movies from './components/Movies';
import MoviesSearch from './components/MoviesSearch';

const App: React.FC = () => {
  return (
    <div>
      {/* <Movies /> */}
      <MoviesSearch/>
    </div>

  );
};

export default App;
