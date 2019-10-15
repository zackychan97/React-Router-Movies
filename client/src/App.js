import React, { useState } from 'react';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';
import {Route} from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path ='/' render={()=> <MovieList />} />
      <Route path ='/movies/:id' render={props => <Movie {...props} addToSavedList={addToSavedList} />} />
    </div>
  );
};

export default App;
