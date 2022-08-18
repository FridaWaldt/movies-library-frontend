import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../lib/init-firebase";
import "./Movies.css";

export const Movies = () => {
  let navigate = useNavigate();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    const movieCollection = collection(db, "movies");
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
    <section className="movies-section">
      <h1 className="movies-title">Movies to watch!</h1>
      <div className="movies-group">
        {movies.map((movie) => (
          <section className="movies-item-group">
            <h3 className="movies-item-title ">{movie.data.title}</h3>
            <a className="movies-item-url " href={movie.data.url}>
              IMDB
            </a>
            <h3 className=" movies-item-rating ">{movie.data.rating}/5</h3>
          </section>
        ))}
      </div>
      <div className="submit-more-group">
        <h4 className="submit-more-title">Go submit more movies!</h4>
        <button className="submit-more-btn" onClick={(e) => navigate("/")}>
          Click here
        </button>
      </div>
    </section>
  );
};
