import Styled from 'styled-components';
import { colorBarHotOrange, colorBarHotYellow } from '../UI/variaveis';

export const Paragraph = Styled.p.attrs((props:{padding:string, fontSize: string}) => ({
  padding: props.padding,
  fontSize: props.fontSize,
}))`
  padding: ${props => props.padding};
  font-size: ${props => props.fontSize};
`;

export const StyledContainer = Styled.div``;

export const StyledColorBar = Styled.div`
  grid-area: color-bar;
  background-image: linear-gradient(180deg, ${colorBarHotOrange}, ${colorBarHotYellow});

  @media(max-width: 425px){
    background-image: linear-gradient(240deg, ${colorBarHotOrange}, ${colorBarHotYellow});
  }
`;

export const StyledAside = Styled.aside`
  grid-area: aside;
`;

export const StyledFooter = Styled.footer`
  grid-area: footer;
`;

export const StyledMain = Styled.main`
  grid-area: main;
`;

export const StyledNavigation = Styled.nav`
  grid-area: navigation;
`;

export const StyledInput = Styled.input``;

export const Styledtitle = Styled.h1``;