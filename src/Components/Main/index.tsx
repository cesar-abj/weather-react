import React from 'react';
import Styled from 'styled-components';
import { IForecast } from '../../App';
import dateHelper from '../../helpers/DateHelper';

const dayMonth = new dateHelper().getDateWithoutYear;


const Main = (props: {propForecast: IForecast[]}) => {
  return(
    <StyledMain>
      <Card>
      {props.propForecast.map((item, index) => {
        return(
          <ContentCard key={index} >
            <h1>{dayMonth(item.date)}</h1>
            <img src={item.day.condition.icon} alt="icone do clima"/>
            <p>{item.day.condition.text}</p>
          </ContentCard>  
        );
      })}
      </Card>
    </StyledMain>
  );
};

export default Main;

const StyledMain = Styled.main`
  grid-area: main;
`;

const ContentCard = Styled.div`
  display: grid;
  place-items: center;
`;

const Card = Styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  width: 86%;
  margin: 0 auto;
  margin-bottom: 10px;

  border-radius: 5px;
  border: 1px solid black;
  border-style: ; 
  padding: .5rem;
`;



