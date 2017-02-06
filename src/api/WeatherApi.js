import 'whatwg-fetch';
import moment from 'moment';
import { apiKeys } from '../constants/apiKeys';
import { cities } from '../constants/cities';

class WeatherApi {
  static getWeatherData(city) {
    return localStorage.getItem(city);
  }

  static makeRequest(city){
    return fetch(`http://api.wunderground.com/api/${apiKeys.wundergroundKey}/conditions/q/Ukraine/${city}.json`)
      .then(response => response.json());
  }

  static setItemToStorage(key, value){
    localStorage.setItem(key, value);
  }

  static checkIfDateValid(date){
    return moment(date).isSame(new Date(), 'day');
  }
}

export default WeatherApi;
