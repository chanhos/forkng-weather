import React , { Component } from 'react';
import { Alert } from "react-native" ; 
import Loading from './Loading' ;
import * as Location from 'expo-location' ;  
import axios from 'axios' ; 
import Weather from './Weather';


// const API_KEY = "-" ; 

export default class  extends Component {
  constructor(props){
    super(props) ;

    this.state = {
      isLoading : true , 
      temp : 0 ,
      condition : "" 
    }
  }
  

  getWeather = async( latitude , longitude ) => {
    const { data : { 
              main : { temp } , 
              weather 
                   } 
          } = await axios.get(
      // --`
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
      
      this.getWeather(latitude , longitude ) ; 
    
    } catch(error) {
      Alert.alert("Cant't find you" ,"So sad") ; 
    }
    
  };
  
  componentDidMount()
  {
    this.getLocation();
  }
  
  render(){
    const { isLoading , temp , condition } = this.state ;  

    return isLoading ? <Loading />  : <Weather temp={temp} condition={condition} /> ; 
  }
}


