import React, {useState, useEffect} from 'react';
import Styled from 'styled-components';

import Aside from './Components/Aside';
import ColorBar from './Components/ColorBar';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Navigation from './Components/Navigation';
import { StyledContainer } from './Components/UI';
import { GlobalStyle } from './Components/globalStyle';
import Loader from './Components/Loader';
import Error from './Components/Error';
import Api from './api';

const App = () => {

  // url para requisição na www.weatherapi.com
  const fetchUrl = 'http://api.weatherapi.com/v1/forecast.json?key=82b2553312b843208ae12719200812&q=vespasiano&days=3&lang=pt-BR';

  // definido estados iniciais com seus respectivos tipos
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  const [day, setDay] = useState<IDay[]>([]);

  const [hour, setHour] = useState<IHour>({
    chanceOfRain: '',
    chanceOfSnow: '',
    cloud: 0,
    condition: {
      code: 0,
      icon: '',
      text: '',
    },
    dewPointC: 0,
    feelsLikeC: 0,
    gustMph: 0,
    heatIndexC: 0,
    humidity: 0,
    isDay: 0,
    precipMm: 0,
    pressureMb: 0,
    tempC: 0,
    time: '',
    visKm: 0,
    willItRain: 0,
    willItSnow: 0,
    windDegree: 0,
    windDir: '',
    windMph: 0,
    windChillC: 0,
  });

  const [astro, setAstro] = useState<IAstro>({
    moonIllumination: '',
    moonPhase: '',
    sunrise: '',
    sunset: '',
  });  

  const [current, setCurrent] = useState<ICurrent>({
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
  });
  
  const [location, setLocation] = useState<ILocation>({
    country: '',
    lat: 0,
    long: 0,
    localTime: '',
    localTimeEpoch: '',
    name: '',
    region: '',
  });

  const [forecast, setForecast] = useState<IForecast[]>([]);

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

    setForecast(data.forecast.forecastday);
  };
 
  useEffect(() => {
    // função responsavel por fazer a requisição
    const fetchWeatherData = async () => {
      
      const api = new Api(fetchUrl).fetchApi();
      
      try{
        const request = api
        .then((data) => {
          
          setState(data);
          // seta o valor do estate loading para true
          setLoading(true);
          
        })
        .catch(error => {
          setError(true)
          return console.log(error)
        })

      return request;

    }catch(error){
      console.log(error)
      setError(true);
    };
    };

    fetchWeatherData();
  }, []);


  return(
    error ? 
    <Container>
      <GlobalStyle />
      <Navigation />
      <Error />
    </Container> :
    loading ? 
    <Container>
      <GlobalStyle />
      <Navigation />
      <ColorBar />
      <Aside location={location} current={current} />
      <Main propForecast={forecast} />
      <Footer />
    </Container>
    : <Loader />
  );
};

export default App;

// Styled components css

const Container = Styled(StyledContainer)`
  font-family: 'Noto Sans', sans-serif;
  display: grid;
  grid-template-columns: auto auto minmax(auto, 30px) auto;
  grid-template-rows: minmax(auto, 100px) auto minmax(auto, 100px);
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
export interface ICurrent {
  cloud: number,
  condition: {
    text: string, 
    icon: string
  },
  feelsLikeC: number,
  gustMph: number,
  humidity: number,
  precipMm: number,
  pressureMb: number,
  tempC: number,
  uv: number,
  visKm: number,
  windDegree: number,
  windDir: string,
  windMph: number,
};
export interface ILocation {
  name: string;
  region: string;
  country: string;
  lat: number;
  long: number;
  localTimeEpoch: string;
  localTime: string;
};
export interface IDay {
  avgHumidity: number,
  avgTempC:number,
  avgVisKm: number,
  condition: {
    code: number,
    icon: string,
    text: string,
  },
  dailyChanceOfRain: string,
  dailyChanceOfSnow: string,
  dailyWillItRain: number,
  dailyWillItSnow: number,
  maxTempC: number,
  maxWindMph: number,
  minTempC: number,
  totalPrecipMm: number,
  uv: number,
};
interface IHour {
  chanceOfRain: string,
  chanceOfSnow: string,
  cloud: number,
  condition: {
    code: number,
    icon: string,
    text: string,
  },
  dewPointC: number,
  feelsLikeC: number,
  gustMph: number,
  heatIndexC: number,
  humidity: number,
  isDay: number,
  precipMm: number,
  pressureMb: number,
  tempC: number,
  time: string,
  visKm: number,
  willItRain: number,
  willItSnow: number,
  windDegree: number,
  windDir: string,
  windMph: number,
  windChillC: number,
};
interface IAstro {
  moonIllumination: string,
  moonPhase: string,
  sunrise: string,
  sunset: string,
};
export interface IForecast {
  astro: IAstro,
  date: Date,
  day: IDay,
  hour: IHour,
}
