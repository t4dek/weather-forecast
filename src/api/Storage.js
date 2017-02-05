import 'whatwg-fetch';
import moment from 'moment';
import { apiKeys } from '../constants/apiKeys';

class Storage {

  makeRequest(city){
    console.log("ASLKDHAKS")
    return fetch(`http://api.wunderground.com/api/${apiKeys.wundergroundKey}/conditions/q/Ukraine/${city}.json`)
      .then(response => response.json());
  }

  getItemFromLocalStorage(key){
    return localStorage.getItem(key);
  }

  getParsedItemFromStorage(key){
    const item = this.getItemFromLocalStorage(key);
    debugger;
    return JSON.parse(item);
  }

  putItemToLocalStorage(key, data){
    localStorage.setItem(key, data);
  }

  deleteItemFromLocalStorage(key){
    localStorage.removeItem(key);
  }

  checkIfDateValid(date){
    return moment(date).isSame(new Date(), 'day');
  }

  makeRequestAndPopulateStorage(city){
    console.log("!!!!!!!!!!");
    console.log("MAKING REQUEST");
    console.log("!!!!!!!!!!");
    this.makeRequest(city).then(response => {
      debugger;
      this.putItemToLocalStorage(city, JSON.stringify(response));
    });
  }

  populateWeatherData(city){
    debugger;
    let item = this.getItemFromLocalStorage(city);
    if(!item){
      this.makeRequestAndPopulateStorage(city);
      return
    }else{
      const data = JSON.parse(item);
      if(this.checkIfDateValid(data.current_observation.observation_time_rfc822)){
        return data;
      }else{
        this.deleteItemFromLocalStorage(city);
        this.makeRequestAndPopulateStorage(city);
        return
      }
    }
  }

}

export default Storage;
