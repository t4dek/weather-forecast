export default function weatherReducer(state, action){
  switch(action.type) {
    case 'LOAD_WEATHER_DATA_SUCCESS':
      return { weatherData: action.weatherData };
    default:
      return state;
  }
}
