import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <MovieList />
      
      <div>Replace this Div with your Routes</div>
    </div>
  );
};

export default App;
