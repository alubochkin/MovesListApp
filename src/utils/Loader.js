import React from 'react';
import { Ripple } from 'react-awesome-spinners';
import styled from 'styled-components';

export const Loader = () => (
  <LoaderBlock>
    <Ripple size="200" color="#0f3846" />
  </LoaderBlock>
);

const LoaderBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
