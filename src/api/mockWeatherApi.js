import delay from './delay';
import { cities } from './mockData';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

class WeatherApi {
  static getAllCities() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], cities));
      }, delay);
    });
  }
}

export default WeatherApi;
