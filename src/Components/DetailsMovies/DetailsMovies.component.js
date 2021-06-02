import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { MOVE_ID, PATH } from '../../utils/constant.api';
import { moviesGet } from '../../utils/fetch';
import PageLayout from '../Layouts/Page.layout';
import { DetailsMoviesContainer } from './DetailsMovies.container';
import { Loader } from '../../utils/Loader';
import { Context } from '../../Context/Context';

export const DetailsMoviesComponent = () => {
  const { id } = useParams();
  const { state, setState } = useContext(Context);

  const [moveDatails, setMoveDatails] = useState(false);

  useEffect(() => {
    moviesGet(PATH.MOVIE_DETAILS, MOVE_ID, id).then((res) =>
      setMoveDatails(res.data.movie)
    );
    setState((prev) => ({
      ...prev,
      titlePage: moveDatails.title ?? 'Loading...',
    }));
  }, [id, moveDatails.title, setState]);

  // eslint-disable-next-line no-console
  console.log(state.numPage);

  return (
    <PageLayout>
      {!moveDatails ? (
        <Loader />
      ) : (
        <>
          <BarckNavigation>
            <Link to={`/${state.numPage}`}>Back list movies</Link> /{' '}
            <span>{moveDatails.title}</span>
          </BarckNavigation>

          <DetailsMoviesContainer page={id} movie={moveDatails} />
        </>
      )}
    </PageLayout>
  );
};

const BarckNavigation = styled.div`
  display: flex;
  gap: 15px;
  padding: 30px 0;
`;
