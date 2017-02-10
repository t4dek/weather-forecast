import expect from 'expect';
import * as weatherActions from '../actions/weatherActions';
import weatherReducer from './weatherReducer';

describe('Weather Reducer', () => {
  it('should return all weather data on load success', () => {
    //arrange
    const initialState = {
      weatherData: []
    };

    const weatherData = [
      {test: 'test'}
    ];

    const action = weatherActions.loadWeatherDataSuccess(weatherData);

    //act
    const newState = weatherReducer(initialState, action);

    //assert
    expect(newState.weatherData.length).toEqual(1);
  });
});
