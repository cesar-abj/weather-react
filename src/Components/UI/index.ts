import Styled from 'styled-components';
import { colorBarHotOrange, colorBarHotYellow, colorBarColdBlue, colorBarColdlightBlue } from '../UI/variaveis';

export const Paragraph = Styled.p.attrs((props:{padding:string, fontSize: string, fontWeight: string}) => ({
  padding: props.padding,
  fontSize: props.fontSize,
  fontWeight: props.fontWeight
}))`
  padding: ${props => props.padding};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
`;

export const StyledColorBarHot = Styled.div`
  grid-area: color-bar;
  background-image: linear-gradient(180deg, ${colorBarHotOrange}, ${colorBarHotYellow});

  @media(max-width: 768px){
    background-image: linear-gradient(240deg, ${colorBarHotOrange}, ${colorBarHotYellow});
  }
`;

export const StyledColorBarCold = Styled.div`
  grid-area: color-bar;
  background-image: linear-gradient(180deg, ${colorBarColdlightBlue}, ${colorBarColdBlue});

  @media(max-width: 768px){
    background-image: linear-gradient(240deg, ${colorBarColdlightBlue}, ${colorBarColdBlue});
  }
`;
