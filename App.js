import React , { Component } from 'react';
import { Alert } from "react-native" ; 
import Loading from './Loading' ;
import * as Location from 'expo-location' ;  
import axios from 'axios' ; 


const API_KEY = "ee6701ef2752bf911a0b6a4ec88d9314" ; 

export default class  extends Component {
  state = {
    isLoading : true , 

  }

  getWeather = async(latitude , longitude ) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    console.log (data) ; 
  };

  getLocation = async() => {
    try{
      
      const response = await Location.requestPermissionsAsync();
      const {
        coords : { latitude , longitude }
      } = await Location.getCurrentPositionAsync();
      
      console.log(latitude, longitude) ; 
      this.getWeather(latitude , longitude ) ; 
      this.setState( { isLoading : false }) ;
      // Send to API and get Weather
      
      //console.log(coords.latitude , coords.longitude) ; 
    } catch(error) {
      Alert.alert("Cant't find you" ,"So sad") ; 
    }
    
  };
  
  componentDidMount(){
    this.getLocation();
  }
  
  render(){
    const { isLoading } = this.state ;  

    return isLoading ? <Loading />  : null ; 
  }
}


