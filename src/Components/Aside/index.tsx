import React from 'react';
import DateHelper from '../../helpers/DateHelper';
import Styled from 'styled-components';
import { Paragraph } from '../UI';
import { ILocation, ICurrent, IDay } from '../../helpers/interfaceHelper';

const dateHelper = new DateHelper();

const Aside = (props: {location: ILocation, current: ICurrent, day: IDay[]}) => {

  const { name, country, localTime, region } = props.location;
  const { tempC, condition, cloud } = props.current;
  let dailyChanceOfRain = '';
  
  props.day.forEach(item => {
    dailyChanceOfRain = item.dailyChanceOfRain;
  })

  return(
  <StyledAside>
    <Paragraph padding='10px 0 5px 0' fontSize='2.5rem' fontWeight='bold' >{`${brasilWithLetterS(country)}`}</Paragraph>
    <Paragraph padding='10px 0 5px 0' fontSize='1.4rem'>{`${dateHelper.getLocalDate(localTime)}`}</Paragraph>
    <Paragraph padding='10px 0 20px 0' fontSize='1.4rem'>{`${dateHelper.getLocalTime(localTime)}`}</Paragraph>

    <Paragraph padding='10px 0 20px 0' fontSize='1.4rem'>{`${gretting(localTime)}`}</Paragraph>

    <Paragraph padding='10px 0 5px 0' fontSize='1.8rem' fontWeight='bold' >{`Clima hoje em ${region}, ${name}`}</Paragraph>
    <Paragraph padding='10px 0 5px 0' fontSize='4rem' fontWeight='bold'>{`${tempC}°`}</Paragraph>

    <Paragraph padding='10px 0 5px 0' fontSize='1.4rem' fontWeight='bold'>{`${condition.text}`}</Paragraph>
    <Paragraph padding='10px 0 5px 0' fontSize='1.4rem' fontWeight='bold'>{`Percentual de nuvens no céu é de ${cloud}%`}</Paragraph>
    <Paragraph padding='10px 0 30px 0' fontSize='1.4rem' fontWeight='bold'>{`Chance de chuva é de ${dailyChanceOfRain}%`}</Paragraph>

  </StyledAside>
  );
};

const brasilWithLetterS = (param: string): string => {
  switch(param){
    case 'Brazil':
      return 'Brasil';
    default:
      return param;
  };
};

// switch case nao é muito performatico pretendo trocar para outra for de renderização condicional, preciso estudar mais.
const gretting = (grettingParam: string): string => {
  const greetHour = new Date(grettingParam).getHours();

  if (greetHour >= 0 && greetHour <= 5){
    return "Boa madrugada!"
  } else if (greetHour >= 6 && greetHour <= 12){
    return "Bom dia!"
  }else if (greetHour >= 13 && greetHour <= 18){
    return "Boa tarde!"
  } else {
    return "Boa noite!"
  };
};

export default Aside;

const StyledAside = Styled.aside`
  grid-area: aside;
  width: 86%;
  margin: 0 auto;
`;