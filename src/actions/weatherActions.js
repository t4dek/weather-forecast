import WeatherApi from '../api/WeatherApi';
import { cities } from '../constants/cities';

export function loadWeatherDataSuccess(weatherData) {
  return { type: 'LOAD_WEATHER_DATA_SUCCESS', weatherData};
}

export function loadWeatherData() {
  return function(dispatch){
    cities.forEach(city => {
      const item = JSON.parse(WeatherApi.getWeatherData(city));
      // If item returned from storage and pulled from an API within one day, dispatch
      // success action with this item
      if(item && WeatherApi.checkIfDateValid(item.current_observation.observation_time_rfc822)){
        dispatch(loadWeatherDataSuccess(item));
      }else{
        // If item is not in storage or it was pulled more than one day ago make request to an API
        // store item in localStorage and dispatch success action with response from an API
        WeatherApi.makeRequest(city).then(response => {
          WeatherApi.setItemToStorage(city, JSON.stringify(response));
          dispatch(loadWeatherDataSuccess(response));
        });
      }
    });
  };
}
