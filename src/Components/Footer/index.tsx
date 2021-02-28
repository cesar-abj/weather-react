import React from 'react';
import Styled from 'styled-components';
import { Paragraph } from '../UI';

const Footer = () => 

  <StyledFooter>
    <Paragraph fontSize='1.3rem' fontWeight='bold'>
      Code e designed by <a className='footer-link' target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/c%C3%A9sar-augusto-1459ab1b2/">Cesar-abj</a>
    </Paragraph>    
  </StyledFooter>
;

export default Footer;

const StyledFooter = Styled.footer`
  grid-area: footer;

  display: grid;
  place-items: center;
  
  .footer-link{
    text-decoration: underline;
    color: black;
  }
`;