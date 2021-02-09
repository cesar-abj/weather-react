import React from 'react';
import DateHelper from '../../helpers/DateHelper';
import { Paragraph, StyledAside } from '../UI';

const dateHelper = new DateHelper()

interface ILocation {
  name: string,
  country: string,
  localTime: string,
  region: string,
};

interface ICurrent {
  tempC: number,
};


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