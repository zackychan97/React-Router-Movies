// import React, { useState } from 'react';
// import MovieList from './Movies/MovieList';
// import SavedList from './Movies/SavedList';
// import {Route} from 'react-router-dom';
// import Movie from './Movies/Movie';


// const App = () => {
//   const [savedList, setSavedList] = useState( [] );

//   const addToSavedList = movie => {
//     setSavedList( [...savedList, movie] );
//   };

//   return (
//     <div>
//       <SavedList list={savedList} />
//       <Route exact path ='/' render={()=> <MovieList />} />
//       <Route path ='/movies/:id' render={props => <Movie {...props} addToSavedList={addToSavedList} />} />
//     </div>
//   );
// };

// export default App;



import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    const present = savedList.find(item => item.title === movie.title);
    if (!present) {
      setSavedList([...savedList, movie]);
    }
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" render={() => <MovieList />} />
      <Route path="/movies/:id" render={props => <Movie {...props} addToSavedList={addToSavedList} />} />
    </div>
  );
};

export default App;




