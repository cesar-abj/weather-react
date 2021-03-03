import React from 'react';
import Styled from 'styled-components';
import dateHelper from '../../helpers/DateHelper';
import {IAstro, ICurrent, IDay, IHour, ILocation} from '../../helpers/interfaceHelper';
import {Paragraph} from '../UI/index';
import imgMoon from '../UI/img/lua.svg';
import imgSun from '../UI/img/sol.svg';
import imgArrow from '../UI/img/arrow.svg';

const dayMonth = new dateHelper().getDateWithoutYear;
const hourDay = new dateHelper().getHour;

const Main = (props: {day: IDay[], hour: IHour[], location: ILocation, current: ICurrent, astro: IAstro[]}) => {

  const { name, lat, long } = props.location;
  const { feelsLikeC, pressureMb, humidity, gustMph, windDir, visKm, uv } = props.current;
  const { sunrise, sunset } = props.astro[0];
  const { maxTempC, minTempC } = props.day[0]
  
  return(
    <StyledMain>

      {/* Card today weather */}
      <Card>
        <Paragraph padding='0 0 10px 0' fontWeight='bold' fontSize='1.5rem'>Clima predominante</Paragraph>
        <ContainerCard>
        {
          props.day.map((item, index) => {
            return(

              <ContentCard key={index} >

                <Paragraph fontWeight='bold'>{dayMonth(item.date)}</Paragraph>
                <img src={item.condition.icon} alt="imagem representativa do clima"/>
                <Paragraph fontWeight='bold'>{item.condition.text}</Paragraph>
              </ContentCard>
            );
          })
        }
        </ContainerCard>
      </Card>
      {/*end card today weather */}

      {/* Card temperature */}
      <Card>
        <Paragraph padding='0 0 10px 0' fontWeight='bold' fontSize='1.5rem'>Temperatura media diaria</Paragraph>
        <ContainerCard>
        {
          props.day.map((item, index) => {
            return(

              <ContentCard key={index} >

                <Paragraph fontWeight='bold'>{dayMonth(item.date)}</Paragraph>
                <Paragraph fontSize='2rem' fontWeight='bold' padding='.5rem'>{`${item.avgTempC}°`}</Paragraph>
              </ContentCard>
            );
          })
        }
        </ContainerCard>
      </Card>
      {/*end card weather */}

      {/* Card hours weather */}
      <Card>
        <Paragraph padding='0 0 10px 0' fontWeight='bold' fontSize='1.5rem'>Previsão para as proximas horas</Paragraph>
        <ContainerCard>
        {
          props.hour.slice(new Date(Date.now()).getHours(), new Date(Date.now()).getHours() + 3).map((item, index) => {
            return(

              <ContentCard key={index}>

                <Paragraph fontWeight='bold'>{hourDay(item.time)}</Paragraph>
                <img src={item.condition.icon} alt="imagem representativa do clima hora"/>
                <Paragraph fontWeight='bold'>{item.condition.text}</Paragraph >
              </ContentCard>
            );
          })
        }
        </ContainerCard>
      </Card>
      {/* end ard hours weather */}

      {/* card info astro */}
      <Card>
        <Paragraph padding='0 0 10px 0' fontWeight='bold' fontSize='1.5rem'>{`Clima hoje em ${name}`}</Paragraph>
        <ContainerCard className='sunset-sunrise'>

          <ContentCard>
            <Paragraph fontSize='3.5rem' fontWeight='bold'>{`${feelsLikeC}°`}</Paragraph>
            <Paragraph fontSize='1.3rem' fontWeight='bold'>{'Sensação termica'}</Paragraph>
          </ContentCard>

          <ContentCard >
            <Paragraph fontWeight='bold'>Nascer do sol</Paragraph>
            <img src={imgSun} alt="imagem representativa do clima hora"/>
            <Paragraph fontWeight='bold' >{sunrise}</Paragraph>
          </ContentCard>

          <ContentCard>
            <img src={imgArrow} alt="imagem representativa do clima hora"/>
          </ContentCard>

          <ContentCard>
            <Paragraph fontWeight='bold'>Por do sol</Paragraph >
            <img src={imgMoon} alt="imagem representativa do clima hora"/>
            <Paragraph fontWeight='bold' >{sunset}</Paragraph>
          </ContentCard>

        </ContainerCard>
      </Card>
      {/* end card astro */}

      {/* Card table info */}
      <Card>      
        <ContainerCard className='card-table-info'>

          <Paragraph padding='3px 0' fontWeight='bold'>Max./Min.</Paragraph>
          <Paragraph padding='3px 0' fontWeight='bold' >{`${maxTempC}° / ${minTempC}°`}</Paragraph>

          <Paragraph padding='3px 0' fontWeight='bold'>Umidade:</Paragraph>
          <Paragraph padding='3px 0' fontWeight='bold' >{`${humidity}%`}</Paragraph>

          <Paragraph padding='3px 0' fontWeight='bold'>Pressão:</Paragraph>
          <Paragraph padding='3px 0' fontWeight='bold' >{`${pressureMb} mb`}</Paragraph>

          <Paragraph padding='3px 0' fontWeight='bold'>Indice UV:</Paragraph>
          <Paragraph padding='3px 0' fontWeight='bold' >{`${uv}`}</Paragraph>

          <Paragraph padding='3px 0' fontWeight='bold'>Vel. vento:</Paragraph>
          <Paragraph padding='3px 0' fontWeight='bold' >{`${gustMph} Km/h`}</Paragraph>

          <Paragraph padding='3px 0' fontWeight='bold'>Visibilidade:</Paragraph>
          <Paragraph padding='3px 0' fontWeight='bold' >{`${visKm} Km`}</Paragraph>

          <Paragraph fontWeight='bold'>Dir. vento</Paragraph>
          <Paragraph fontWeight='bold' >{`${windDir}`}</Paragraph>

          <Paragraph fontWeight='bold'>Lat./Long.</Paragraph>
          <Paragraph fontWeight='bold' >{`${lat}/${long}`}</Paragraph>

        </ContainerCard>
      </Card>
      {/* end card table info */}

    </StyledMain>
  );
};

export default Main;

const StyledMain = Styled.main`
  grid-area: main;

  .sunset-sunrise{
    display: grid;
    grid-template-columns: 40% 20% 10% 20%;
  }

  .card-table-info{
    display: grid;
    align-items: center;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`;

const ContainerCard = Styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

`;

const Card = Styled.div`
  display: grid;

  width: 86%;
  margin: 0 auto;
  margin-bottom: 2rem;

  border-radius: 5px;
  border: 2px solid black;
  border-style: ; 
  padding: .5rem;
  box-shadow: 2px 3px rgba(0, 0, 0, .4);
`;

const ContentCard = Styled.div`
  display: grid;
  place-items: center;
  text-align: center;
`;