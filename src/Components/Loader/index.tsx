import React from 'react';
import Styled from 'styled-components';
import imgBackground from '../UI/img/nuvem.svg';

const BackgroundStyled = Styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const LoaderBackground = () => {
  return (
    <BackgroundStyled>
      <img src={imgBackground} alt='nuvem de chuva' />
    </BackgroundStyled>
  );
}

export default LoaderBackground;