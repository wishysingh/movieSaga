/**
 *
 * MovieDetails
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import queryString from 'query-string';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectMovieDetails } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { apicall } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class MovieDetails extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loader: true,
    };
  }

  componentDidMount() {
    this.setState(
      {
        loader: true,
      },
      () => {
        this.props.apicall(queryString.parse(this.props.location.search).id);
      },
    );
    this.setState({
      loader: false,
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>MovieDetails</title>
          <meta name="description" content="Description of MovieDetails" />
        </Helmet>
        {this.state.loader ? (
          <div>loading</div>
        ) : (
          <div>
            {this.props.movies && (
              <div>
                <h1>{this.props.movies.original_title}</h1>
                {this.props.movies.poster_path ? (
                  <img
                    alt="movies"
                    src={`https://image.tmdb.org/t/p/w500${
                      this.props.movies.poster_path
                    }`}
                  />
                ) : (
                  <div />
                )}
                <p>{this.props.movies.overview}</p>
                <p>
                  imdb id:
                  {this.props.movies.imdb_id}
                </p>
                <p>
                  popularity:
                  {this.props.movies.popularity}
                </p>
                <p>
                  revenue:
                  {this.props.movies.revenue}
                </p>
                <p>
                  raitng:
                  {this.props.movies.vote_average}
                </p>
                <p>
                  users:
                  {this.props.movies.vote_count}
                </p>
                <p>
                  release date:
                  {this.props.movies.release_date}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  movies: PropTypes.object,
  location: PropTypes.object,
  apicall: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  movies: makeSelectMovieDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    apicall: text => dispatch(apicall(text)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'movieDetails', reducer });
const withSaga = injectSaga({ key: 'movieDetails', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MovieDetails);
