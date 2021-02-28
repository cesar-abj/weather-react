import React, {useState, useEffect} from 'react';
import Styled from 'styled-components';

import Aside from './Components/Aside';
import ColorBar from './Components/ColorBar';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Navigation from './Components/Navigation';
import { GlobalStyle } from './Components/globalStyle';
import Loader from './Components/Loader';
import Error from './Components/Error';
import Api from './api';
import { IDay, IHour, IAstro } from './helpers/interfaceHelper';


// const inputNav = document.querySelector('.data-input-nav') as HTMLInputElement ;
const fetchUrl = `http://api.weatherapi.com/v1/forecast.json?key=82b2553312b843208ae12719200812&q=brasilia&days=3&lang=pt`;

const App: React.FC = () => {

  // url para requisição na www.weatherapi.com

  // definido estados iniciais com seus respectivos tipos
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  const [day, setDay] = useState<IDay[]>([]);

  const [hour, setHour] = useState<IHour[]>([]);

  const [astro, setAstro] = useState<IAstro[]>([]);  

  const [current, setCurrent] = useState({
    cloud: 0,
    condition: {
      text: '', 
      icon: ''
    },
    feelsLikeC: 0,
    gustMph: 0,
    humidity: 0,
    precipMm: 0,
    pressureMb: 0,
    tempC: 0,
    uv: 0,
    visKm: 0,
    windDegree: 0,
    windDir: '',
    windMph: 0,
  }
  );
  
  const [location, setLocation] = useState({
    country: '',
    lat: 0,
    long: 0,
    localTime: '',
    localTimeEpoch: '',
    name: '',
    region: '',
  });
  
  // função responsvel por distribuir os estados da aplicação
  const setState = (data: any) => {
    
    setLocation({
      country: data.location.country,
      lat: data.location.lat,
      long: data.location.lon,
      localTime: data.location.localtime,
      localTimeEpoch: data.location.localtime_epoch,
      name: data.location.name,
      region: data.location.region,
    });
  
    setCurrent({
      cloud: data.current.cloud,
      condition: {
        text: data.current.condition.text, 
        icon: data.current.condition.icon
      },
      feelsLikeC: data.current.feelslike_c,
      gustMph: data.current.gust_mph,
      humidity: data.current.humidity,
      precipMm: data.current.precip_mm,
      pressureMb: data.current.pressure_mb,
      tempC: data.current.temp_c,
      uv: data.current.uv,
      visKm: data.current.vis_km,
      windDegree: data.current.wind_degree,
      windDir: data.current.wind_dir,
      windMph: data.current.wind_mph,
    });

    data.forecast.forecastday.reverse().forEach((item: {day: any, date: string, astro: any}) => {

      setDay(prevState => [{
        avgHumidity: item.day.avghumidity,
        avgTempC:item.day.avgtemp_c,
        avgVisKm: item.day.avgvis_km,
        condition: {
          code: item.day.condition.code,
          icon: item.day.condition.icon,
          text: item.day.condition.text,
        },
        dailyChanceOfRain: item.day.daily_chance_of_rain,
        dailyChanceOfSnow: item.day.daily_chance_of_snow,
        dailyWillItRain: item.day.daily_will_it_rain,
        dailyWillItSnow: item.day.daily_will_it_snow,
        date: item.date,  
        maxTempC: item.day.maxtemp_c,
        maxWindMph: item.day.maxwind_mph,
        minTempC: item.day.mintemp_c,
        totalPrecipMm: item.day.totalprecip_mm,
        uv: item.day.uv,
      }, ...prevState].slice(0, 3));
      // o slice garante que meu array vai possuir apenas o 3 items mais recentes
      // assim não acumulando as pesquisas anteriores
      setAstro(prevState => [{
        moonIllumination: item.astro.moon_illumination,
        moonPhase: item.astro.moon_phase,
        sunrise: item.astro.sunrise,
        sunset: item.astro.sunset,
      }, ...prevState]);
    });

    data.forecast.forecastday[2].hour.reverse().forEach((item: any) => {
      setHour(prevState => [{
        chanceOfRain: item.chance_of_rain,
        chanceOfSnow: item.chance_of_snow,
        cloud: item.cloud,
        condition: {
          code: item.condition.code,
          icon: item.condition.icon,
          text: item.condition.text,
        },
        dewPointC: item.dewpoint_c,
        feelsLikeC: item.feelslike_c,
        gustMph: item.gust_mph,
        heatIndexC: item.heatindex_c,
        humidity: item.humidity,
        isDay: item.is_day,
        precipMm: item.precip_mm,
        pressureMb: item.pressure_mb,
        tempC: item.temp_c,
        time: item.time,
        visKm: item.vis_km,
        willItRain: item.will_it_rain,
        willItSnow: item.will_it_snow,
        windDegree: item.wind_degree,
        windDir: item.wind_dir,
        windMph: item.wind_mph,
        windChillC: item.windchill_c
      }, ...prevState])
    });
  };

  const fetchWeatherData = async (fetchUrl: string) => {

    const api = new Api(fetchUrl).fetchApi();
    
    try{
      const request = api
      .then((data) => {
        
        setState(data);
        setLoading(true);          
        setError(false);
      })
      .catch(error => {

        setError(true)
        return console.log(error)
      })

      return request;

    }catch(error){
    
    console.log(error)
    setError(true);
  }};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const inputNav = document.querySelector('[data-input-nav]') as HTMLInputElement;
    
    const valueOfInputNav = inputNav.value;
    
    fetchWeatherData(`http://api.weatherapi.com/v1/forecast.json?key=82b2553312b843208ae12719200812&q=${valueOfInputNav}&days=3&lang=pt`);    

    inputNav.value = '';
  };


 
  useEffect(() => {
    // função responsavel por fazer a requisição

    fetchWeatherData(fetchUrl);

    // preciso encontrar um meio de concertar essa advertencia
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
 
  return(
    error ? 
    <Container>
      <GlobalStyle />
      <Navigation submit={handleSubmit} />
      <Error />
    </Container> :
    loading ? 
    <Container>
      <GlobalStyle />
      <Navigation submit={handleSubmit} />
      <ColorBar current={current} />
      <Aside location={location} current={current} day={day} />
      <Main day={day} hour={hour} location={location} current={current} astro={astro} />
      <Footer />
    </Container>
    : <Loader />
  );
};

export default App;

// Styled components css

const Container = Styled.div`

  font-family: 'Roboto', sans-serif;
  display: grid;
  grid-template-columns: auto auto 30px auto;
  grid-template-rows: 100px auto 100px;
  grid-template-areas: "navigation navigation color-bar aside"
                       "main main color-bar aside"
                       "main main color-bar footer"
  ;

  max-width: 1440px;
  height: 100vh;

  margin: 0 auto;

  @media (max-width:768px){
    display: grid;
    height: auto;
    grid-template-rows: 1fr 20px auto auto 1fr ;
    grid-template-columns: auto;
    grid-template-areas: "navigation"
                         "color-bar"
                         "aside"
                         "main"
                         "footer"
    ;
  };
`;
