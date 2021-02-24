import React from 'react';
import Styled from 'styled-components';
import dateHelper from '../../helpers/DateHelper';
import {IDay, IHour} from '../../App';

const dayMonth = new dateHelper().getDateWithoutYear;
const hourDay = new dateHelper().getHour;

const Main = (props: {day: IDay[], hour: IHour[]}) => {

  return(
    <StyledMain>
      <Card>
      {
        props.day.map((item, index) => {
          return(
            <ContentCard key={index} >
              <h1>{dayMonth(item.date)}</h1>
              <img src={item.condition.icon} alt="imagem representativa do clima"/>
              <p>{item.condition.text}</p>
            </ContentCard>
          );
        })
      }
      </Card>
      <Card>
        {
          props.hour.slice(new Date(Date.now()).getHours(), new Date(Date.now()).getHours() + 3).map((item, index) => {
            return(
              <ContentCard key={index}>
                <h1>{hourDay(item.time)}</h1>
                <img src={item.condition.icon} alt="imagem representativa do clima hora"/>
                <p>{}</p>
              </ContentCard>
            );
          })
        }
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
  text-align: center;
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