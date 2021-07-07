// import React from 'react';

// const SavedList = props => (
//   <div className="saved-list">
//     <h3>Saved Movies:</h3>
//     {props.list.map(movie => (
//       <span className="saved-movie">{movie.title}</span>
//     ))}
//     <div className="home-button">Home</div>
//   </div>
// );

// export default SavedList;



import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink to={`/movies/${movie.id}`} key={movie.id} activeClassName="saved-active">
        <span className="saved-movie" >
          {movie.title}
        </span>
      </NavLink>
    ))}
    <Link to="/">
      <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;


