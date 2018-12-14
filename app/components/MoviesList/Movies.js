/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Movies extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.movies.original_title}</h2>
        {this.props.movies.backdrop_path ? (
          <Link
            to={`/movies/${this.props.movies.original_title}?id=${
              this.props.movies.id
            }`}
          >
            <img
              alt="movies"
              src={`https://image.tmdb.org/t/p/w500${
                this.props.movies.backdrop_path
              }`}
            />
          </Link>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Movies;

Movies.propTypes = {
  movies: PropTypes.object,
};
