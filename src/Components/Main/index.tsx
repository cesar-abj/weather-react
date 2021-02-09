import React, { ReactChild, ReactChildren } from 'react';
import {StyledMain} from '../UI';

const Main = (props:{error?: JSX.Element}) => 
  <StyledMain>
    {props.error}
  </StyledMain>
;

export default Main;