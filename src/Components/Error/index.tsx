import Styled from 'styled-components';
import errorSvg from '../UI/img/error.svg'

const Error = () => {
  return(
    <Container className='error' >
      <img src={errorSvg} alt=""/>
    </Container>
  );
};

export default Error;
  
const Container = Styled.div`

  display: grid;
  grid-area: main;
  place-items: center;

  @media(max-width: 768px){
    display: grid;
    place-items: center;
    width: 100%
    height: 100vh;
  }
`;
