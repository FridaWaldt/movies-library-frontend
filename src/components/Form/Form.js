import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../lib/init-firebase';
import './Form.css';

export const Form = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [rating, setRating] = useState(0);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '' || url === '' || rating === 0) {
      return;
    }
    const moviesCollection = collection(db, 'movies');
    addDoc(moviesCollection, { title: title, url: url, rating: rating });
    setSubmit(true);
  };

  return (
    <div className='form-group'>
      <h1>Add a movie</h1>
      <form onSubmit={handleSubmit} className='form'>
        <div className='title-group'>
          <h3>Title</h3>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className='url-group'>
          <h3>Url</h3>
          <input value={url} onChange={(e) => setUrl(e.target.value)}></input>
        </div>
        <div className='rating-group'>
          <h3>Ratings</h3>
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </div>
        <button type='submit' className='submit-btn'>
          Submit
        </button>
        {submit ? (
          <div className='submitted-msg'>
            <h3>You submitted a movie, check it out!</h3>
            <button>Click here</button>
          </div>
        ) : (
          ''
        )}
      </form>
    </div>
  );
};
