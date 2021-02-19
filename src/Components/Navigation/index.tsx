import React from 'react';
import Styled from 'styled-components';
import {  StyledContainer, } from '../UI';
import { colorBarColdBlue } from '../UI/variaveis';
import Title from '../Title';

const Navigation = () =>
  <StyledNav>
    <Container size='1.6rem' mobileSize='1.3rem'>
      <Title head='h1'>Weather - Abj</Title>
    </Container>
    <Container>
      <Input type="text" placeholder="Busca"/>
    </Container>
  </StyledNav>
;

const StyledNav = Styled.nav`
  grid-area: navigation;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5rem;

  @media(max-width: 425px){
    display: flex;
    flex-direction: row;
    height: 4rem;
  }
`;

const Container = Styled(StyledContainer).attrs((props:{size?:string, border?:string, mobileSize?: string}) => ({
  size: props.size,
  mobileSize: props.mobileSize,
}))`
  display: grid;
  place-items: center;
  font-size: ${props => props.size};
  
  @media(max-width: 768px){
    height: 60%;
    font-size: ${props => props.mobileSize};
  }
`;

const Input = Styled.input`
  max-width: 10.5rem;
  border-radius: 20px;
  padding: .4rem;
  font-size: 1.3rem;
  outline: none;
  border: 2px solid ${colorBarColdBlue};

  @media(max-width: 768px){
    padding: .2rem;
    max-width: 9rem;
    font-size: 1rem;
  }
`;

export default Navigation;