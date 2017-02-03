export default function weatherReducer(state={weatherData:[]}, action){
  console.log("!!!!!!!!!!!");
  console.log(action)
  console.log("!!!!!!!!!!!");
  switch(action.type) {
    case 'LOAD_WEATHER_DATA_SUCCESS':
      return { weatherData: action.weatherData };
    default:
      return state;
  }
}
