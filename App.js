import React , { Component } from 'react';
import { Alert } from "react-native" ; 
import Loading from './Loading' ;
import * as Location from 'expo-location' ;  
import axios from 'axios' ; 
import Weather from './Weather';


const API_KEY = "ee6701ef2752bf911a0b6a4ec88d9314" ; 

export default class  extends Component {
  state = {
    isLoading : true , 
    temp : 0,
    condition : "" ,
  }

  getWeather = async(latitude , longitude ) => {
    const { data : { 
              main : { temp } , 
              weather 
                   } 
          } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    //var tempTonum = temp.toFixed(1) ; 
    console.log(weather[0].main) ; 
    this.setState({ 
         isLoading : false ,
         condition : weather[0].main  , 
         temp :  temp.toFixed(1)
    }) ;
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
    const { isLoading , temp , condition } = this.state ;  

    return isLoading ? <Loading />  : <Weather temp={temp} condition={condition}/> ; 
  }
}


