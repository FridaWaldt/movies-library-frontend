import React, { useState } from "react";

export const FormView = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setRating(e.target.value);
  };
  return (
    <>
      <h1>Add a movie</h1>
      <form>
        <div className="title-group">
          <h3>Title</h3>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className="url-group">
          <h3>Url</h3>
          <input value={url} onChange={(e) => setUrl(e.target.value)}></input>
        </div>
        <div className="rating-group">
          <h3>Rating</h3>
          <select value={rating} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};
