import React from 'react';
import PropTypes from 'prop-types';
import Movies from './Movies';

const MoviesList = ({ movies, url }) => {
  const moviecomponent = movies.map((user, i) => (
    <Movies key={i} movies={movies[i]} url={url} />
  ));
  return <div>{moviecomponent}</div>;
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.object,
  url: PropTypes.object,
};
