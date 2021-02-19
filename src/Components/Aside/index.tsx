import React from 'react';
import DateHelper from '../../helpers/DateHelper';
import Styled from 'styled-components';
import { Paragraph } from '../UI';
import { ILocation, ICurrent } from '../../App';

const dateHelper = new DateHelper();

const Aside = (props: {location: ILocation, current: ICurrent}) => {

  const { name, country, localTime, region } = props.location;
  const { tempC } = props.current;

  return(
  <StyledAside>
    <Paragraph padding='10px 0 5px 20px' fontSize='2rem'>{`${region}, ${brasilWithLetterS(country)}`}</Paragraph>
    <Paragraph padding='10px 0 5px 20px' fontSize='1.3rem'>{`${dateHelper.getLocalDate(localTime)}`}</Paragraph>
    <Paragraph padding='10px 0 5px 20px' fontSize='1.3rem'>{`${dateHelper.getLocalTime(localTime)}`}</Paragraph>
    <Paragraph padding='10px 0 5px 20px' fontSize='4rem'>{`${tempC}°`}</Paragraph>
    <Paragraph padding='10px 0 5px 20px' fontSize='1.3rem'>{`Clima hoje em ${name}`}</Paragraph>
  </StyledAside>
  );
};

function brasilWithLetterS(param: string){
  switch(param){
    case 'Brazil':
      return 'Brasil';
    default:
      return param;
  };
};

export default Aside;

const StyledAside = Styled.aside`
  grid-area: aside;
`;