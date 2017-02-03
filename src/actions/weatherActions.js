import WeatherApi from '../api/mockWeatherApi';

export function loadWeatherDataSuccess(weatherData) {
  return { type: 'LOAD_WEATHER_DATA_SUCCESS', weatherData};
}

export function loadWeatherData() {
  return function(dispatch) {
    return WeatherApi.getWeatherData().then(weatherData => {
      dispatch(loadWeatherDataSuccess(weatherData));
    }).catch(error => {
      throw(error);
    });
  };
}
