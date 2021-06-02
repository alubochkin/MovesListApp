/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DETAILS_MOVIE } from '../../utils/constant.routers';

export function MovieListContainer({ movies }) {
  return (
    <WrappListCards>
      {movies?.map((movie) => (
        <MovieCard key={movie.id}>
          <Link className="movieCard" to={`/${DETAILS_MOVIE}/${movie.id}`}>
            <Rating>{movie.rating}</Rating>
            <Poster
              alt=""
              src={
                movie.medium_cover_image
                  ? movie.medium_cover_image
                  : 'https://www.organiqueturkiye.com/assets/images/default.png'
              }
            />
            <Title>{movie.title}</Title>
          </Link>
        </MovieCard>
      ))}
    </WrappListCards>
  );
}

const WrappListCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
  gap: 30px;
`;

const MovieCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 350px;
  background: #fff;
  cursor: pointer;
  transition: 0.2s ease-in;
  &:hover {
    box-shadow: 0 0 30px #00000030;
    transform: scale(1.02);
  }
`;

const Rating = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: #ffda35;
  border-radius: 30px;
  color: #000;
  font-weight: bold;
  font-size: 13px;
  top: -17px;
  right: -17px;
`;

const Title = styled.div`
  width: 100%;
  padding: 10px 5px;
  text-align: center;
`;

const Poster = styled.img`
  width: 100%;
  object-fit: cover;
  max-height: 350px;
  height: 100%;
`;
