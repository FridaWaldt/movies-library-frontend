import React, { useEffect, useState } from 'react';
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../lib/init-firebase';

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    const movieCollection = collection(db, 'movies');
    getDocs(movieCollection).then((response) => {
      console.log(response.docs);
      const moviesDocs = response.docs.map((movie) => ({
        data: movie.data(),
        id: movie.id,
      }));
      setMovies(moviesDocs);
    });
  };

  return (
    <div>
      <h1>Movies to watch!</h1>
      <div className='movies'>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.data.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
