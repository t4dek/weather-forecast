import * as moment from 'moment';
// import MockWeatherApi from '../api/mockWeatherApi';
import WeatherApi from '../api/WeatherApi';

export function loadWeatherDataSuccess(weatherData) {
  debugger;
  return { type: 'LOAD_WEATHER_DATA_SUCCESS', weatherData};
}

export function loadWeatherData() {
  return function(dispatch) {
    // return MockWeatherApi.getWeatherData().then(weatherData => {
    //   dispatch(loadWeatherDataSuccess(weatherData));
    // }).catch(error => {
    //   throw(error);
    // });
    dispatch(loadWeatherDataSuccess(WeatherApi.getWeatherData()));
  };
}
