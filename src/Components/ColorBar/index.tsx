import React from 'react';
import { ICurrent } from '../../helpers/interfaceHelper';
import { StyledColorBarHot, StyledColorBarCold } from '../UI';

const ColorBar = (props: {current: ICurrent}) => {

  const {tempC} = props.current;
  return tempC <= 17 ? <StyledColorBarCold/> : <StyledColorBarHot />;
} 
;  
export default ColorBar;