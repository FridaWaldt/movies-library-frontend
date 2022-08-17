import React, { useEffect, useState } from 'react';
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../../lib/init-firebase';

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
    <section className='movies-section'>
      <h1>Movies to watch!</h1>
      <div className='movies-group'>
        {movies.map((movie) => (
          <section>
            <h3>{movie.data.title}</h3>
            <a href={movie.data.url}>IMDB</a>
            <h3>{movie.data.rating}/5</h3>
          </section>
        ))}
      </div>
      <button>Submit more movies</button>
    </section>
  );
};
