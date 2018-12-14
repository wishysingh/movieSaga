/**
 *
 * SearchMovie
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import queryString from 'query-string';
import Searchbox from 'components/SearchBox';
import MoviesList from 'components/MoviesList';
import NextPageButton from 'components/NextPageButton';
// import Loader from 'components/Loader';
import PrevPageButton from 'components/PrevPageButton';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { movieListApi, searchList } from './constants';
// import {
//   makeSelectSearchMovie,
//   makeSelectMovies,
//   makeSelectMaxPage,
// } from './selectors';

import {
  makeSelectSearchMovie,
  makeSelectMovies,
  makeSelectMaxPage,
} from './selectors';
import { apicall, searchChange, initialState } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class SearchMovie extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderapi: '',
      loader: false,
    };
  }

  componentDidMount() {
    this.setState(
      {
        renderapi: !this.props.match.params.movies
          ? movieListApi
          : searchList(this.props.match.params.movies),
      },
      this.api.bind(this),
    );
  }

  api() {
    this.setState(
      {
        loader: true,
      },
      () => {
        this.props.apicall(
          this.state.renderapi +
            queryString.parse(this.props.location.search).pageNo,
        );
        this.setState({
          loader: false,
        });
      },
    );
  }

  onSearchClick() {
    if (this.props.searchtext) {
      this.props.history.push(`/${this.props.searchtext}?pageNo=1`);
    } else this.props.history.push('/');
    this.setState(
      {
        renderapi: this.props.searchtext
          ? searchList(this.props.searchtext)
          : movieListApi,
      },
      this.api,
    );
  }

  next() {
    const no = Number(queryString.parse(this.props.location.search).pageNo);
    const num = no + 1;
    this.props.history.push(`/${this.props.match.params.movies}?pageNo=${num}`);
    this.api();
  }

  prev() {
    const no = Number(queryString.parse(this.props.location.search).pageNo);
    const num = no - 1;
    this.props.history.push(`/${this.props.match.params.movies}?pageNo=${num}`);
    this.api();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>SearchMovie</title>
          <meta name="description" content="Description of SearchMovie" />
        </Helmet>
        {this.state.loader ? (
          <div>loading</div>
        ) : (
          <div>
            <Searchbox
              searchChange={this.props.onSearchChange}
              searchClick={() => this.onSearchClick()}
              placeholder={this.props.searchtext}
            />
            {this.props.movies && (
              <div>
                <MoviesList
                  movies={this.props.movies}
                  url={this.props.match.params}
                />
                {this.props.maxpage >
                  Number(
                    queryString.parse(this.props.location.search).pageNo,
                  ) && <NextPageButton next={() => this.next()} />}
                {Number(queryString.parse(this.props.location.search).pageNo) >
                  1 && <PrevPageButton prev={() => this.prev()} />}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

SearchMovie.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
  apicall: PropTypes.func,
  searchtext: PropTypes.string,
  onSearchChange: PropTypes.func,
  movies: PropTypes.object,
  maxpage: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  searchtext: makeSelectSearchMovie(),
  movies: makeSelectMovies(),
  maxpage: makeSelectMaxPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSearchChange: event => dispatch(searchChange(event)),
    initialState: text => dispatch(initialState(text)),
    apicall: text => dispatch(apicall(text)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'searchMovie', reducer });
const withSaga = injectSaga({ key: 'searchMovie', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SearchMovie);
