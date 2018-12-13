/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SearchMovie from 'containers/SearchMovie/Loadable';
import MovieDetails from 'containers/MovieDetails/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={SearchMovie} />
        <Route exact path="/:movies" component={SearchMovie} />
        <Route exact path="/movies/:movieName" component={MovieDetails} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
