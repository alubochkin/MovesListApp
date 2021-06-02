/* eslint-disable no-use-before-define */
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Context } from '../../Context/Context';
import { PAGE, PATH } from '../../utils/constant.api';
import { moviesGet } from '../../utils/fetch';
import PageLayout from '../Layouts/Page.layout';
import { MovieListContainer } from './MovieList.container';
import { Loader } from '../../utils/Loader';

export function MovieListComponent() {
  const { state, setState } = useContext(Context);

  const generatNavigateArr = () => new Array(30).fill('').map((_, i) => i + 1);

  const [allPages] = useState(generatNavigateArr());

  useEffect(() => {
    setState((prev) => ({ ...prev, loading: true }));
    setState((prev) => ({
      ...prev,
      titlePage: 'Movies List search & download torrent',
    }));
    moviesGet(PATH.LIST_MOVIES, PAGE, state.numPage)
      .then((result) => {
        setState((prev) => ({
          ...prev,
          loadedListMovies: result.data.movies,
        }));
      })
      .then(() => setState((prev) => ({ ...prev, loading: false })));

    // setState((prev) => ({ ...prev, numPage: +page }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.numPage]);

  const paginationHandler = (numPage) => {
    setState((prev) => ({ ...prev, numPage }));
    window.scrollTo(0, 0);
  };

  const setPageHandler = () => {
    // ctx.setState((prev) => ({ ...prev, numPage }));
  };

  return (
    <>
      {state.loading ? (
        <Loader />
      ) : (
        <PageLayout>
          <MovieListContainer movies={state.loadedListMovies} />
          <Paginstion>
            {allPages.map((numPage) => (
              <Link onClick={setPageHandler} key={numPage} to={`/${numPage}`}>
                <PageItems
                  className={state.numPage === numPage ? 'active' : null}
                  onClick={() => paginationHandler(numPage)}
                >
                  {numPage}
                </PageItems>
              </Link>
            ))}
          </Paginstion>
        </PageLayout>
      )}
    </>
  );
}

const Paginstion = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 30px;
`;

const PageItems = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ccc;
  cursor: pointer;
  &.active {
    background: red;
    color: #fff;
  }
`;
