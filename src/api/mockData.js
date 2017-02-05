import { cities } from '../mocks/mockData'

class MockData {
  static cities(){
    let data = new Map();

    cities.forEach(city => {
      data.set(city.current_observation.display_location.city, city);
    });

    return data;
  }
}

export default MockData;
