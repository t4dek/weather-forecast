import 'whatwg-fetch'
import { cities } from './mockData';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

class WeatherApi {
  static getWeatherData() {
    const delay = 0;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], cities));
      }, delay);
    });
    // return fetch("http://api.wunderground.com/api/df9f00f0a6df97a8/conditions/q/Ukraine/Donets'k.json")
    //   .then(response => response.json())
  }
}

export default WeatherApi;
