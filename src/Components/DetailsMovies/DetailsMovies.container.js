import React from 'react';

import styled from 'styled-components';

export const DetailsMoviesContainer = ({ movie }) => (
  <>
    <Wpapper>
      <Poster>
        <img alt="" src={movie.medium_cover_image} />
      </Poster>

      <Description>
        <h1>Name movies: {movie.title}</h1>
        <div>
          <p>Description: </p>
          {movie.description_full}
        </div>

        <p>
          Genres:{' '}
          {movie?.genres?.map((el) => (
            <span key={el}>{`${el} `}</span>
          ))}
        </p>
      </Description>
    </Wpapper>
  </>
);

const Wpapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 15px;
  background: #fff;
`;

const Poster = styled.div`
  min-width: 250px;
  max-width: 25%;
  width: 100%;
`;

const Description = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 70%;
`;
