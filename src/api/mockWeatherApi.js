import MockData from './MockData';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

class MockWeatherApi {
  static getWeatherData() {
    const delay = 0;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(MockData.cities());
      }, delay);
    });
  }
}

export default MockWeatherApi;
