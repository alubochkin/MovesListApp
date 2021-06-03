import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DetailsMoviesComponent } from './Components/DetailsMovies/DetailsMovies.component';
import { MovieListComponent } from './Components/MovieList';
import { Context } from './Context/Context';
import { DETAILS_MOVIE } from './utils/constant.routers';

function App() {
  const [state, setState] = useState({
    numPage: 1,
    query: 1,
    loading: false,
    loadedListMovies: [],
    titlePage: '',
  });

  document.title = state.titlePage;

  return (
    <Context.Provider value={{ state, setState }}>
      <Router>
        <Switch>
          <Route exact path={`/${DETAILS_MOVIE}/:id`}>
            <DetailsMoviesComponent />
          </Route>

          <Route path="/:id">
            <MovieListComponent />
          </Route>

          <Route path="/">
            <MovieListComponent />
          </Route>
        </Switch>
      </Router>
    </Context.Provider>
  );
}

export default App;
