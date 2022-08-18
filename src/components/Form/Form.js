import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../lib/init-firebase";
import "./Form.css";

export const Form = () => {
  let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [rating, setRating] = useState(0);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || url === "" || rating === 0) {
      return;
    }
    const moviesCollection = collection(db, "movies");
    addDoc(moviesCollection, { title: title, url: url, rating: rating });
    setSubmit(true);
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/movies");
    setTitle("");
    setUrl("");
    setRating(0);
    setSubmit(false);
  };

  return (
    <div className="form-group">
      <h1 className="form-title">Add a movie</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="title-group">
          <h3 className="form-labels">Title</h3>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-elements"
          ></input>
        </div>
        <div className="url-group">
          <h3 className="form-labels">Url</h3>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="form-elements"
          ></input>
        </div>
        <div className="rating-group">
          <h3 className="form-labels">Ratings</h3>
          <select
            className="form-elements"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button type="submit" className="form-elements submit-btn">
          Submit
        </button>
        {submit ? (
          <div className="submitted-msg">
            <h3 className="submitted-text">
              You submitted a movie, check it out!
            </h3>
            <button className="submitted-btn" onClick={handleClick}>
              Click here
            </button>
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};
