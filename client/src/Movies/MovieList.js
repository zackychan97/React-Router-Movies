// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {Link} from 'react-router-dom';
// import MovieCard from './MovieCard';

// const MovieList = props => {
//   const [movies, setMovies] = useState([])
//   useEffect(() => {
//     const getMovies = () => {
//       axios
//         .get('http://localhost:5000/api/movies')
//         .then(response => {
//           setMovies(response.data);
//         })
//         .catch(error => {
//           console.error('Server Error', error);
//         });
//     }
    
//     getMovies();
//   }, []);
//   console.log(props)
  
//   return (
//     <div className="movie-list">
//       {movies.map(movie => (
//         <Link to={`/movies/${movie.id}`} key={movie.id}>
//           <MovieCard movie={movie}/>
//         </Link>  
//       ))}
//     </div>
//   );
// }

// // function MovieDetails({ movie }) {
// //   const { title, director, metascore, stars } = movie;
// //   return (
// //     <div className="movie-card">
// //       <h2>{title}</h2>
// //       <div className="movie-director">
// //         Director: <em>{director}</em>
// //       </div>
// //       <div className="movie-metascore">
// //         Metascore: <strong>{metascore}</strong>
// //       </div>
// //       <h3>Actors</h3>

// //       {stars.map(star => (
// //         <div key={star} className="movie-star">
// //           {star}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// export default MovieList;













import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import MovieCard from './MovieCard';

const MovieList = props => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    };

    getMovies();
  }, []);
console.log(props)
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;





