import React from 'react';
import { useNavigate } from "react-router-dom";

export const Nav = () => {
    let navigate = useNavigate();
  return (
    <>
    <button onClick={() => navigate(`/form`)}>
            Form
          </button>
    <button onClick={() => navigate(`/movies`)}>
            Movies
          </button>
    </>
  )
}
