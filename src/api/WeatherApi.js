import { cities } from '../constants/cities';
import Storage from './Storage';

class WeatherApi {
  static getWeatherData() {
    const storage = new Storage();
    let weatherData = new Map();
    cities.forEach(city => {
      storage.populateWeatherData(city);
      const data = storage.getParsedItemFromStorage(city);
      debugger;
      weatherData.set(city, data);
    });
    return weatherData;
  }
}

export default WeatherApi;
