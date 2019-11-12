import React from 'react';
import { View, Text, StyleSheet , StatusBar } from 'react-native' ; 
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from "@expo/vector-icons" ; 
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze : {
        iconName : "weather-fog" ,
        gradient : ['#C9D6FF' , '#E2E2E2'] ,
    } ,
    Thunderstorm : {
        iconName : "weather-lightning",
        gradient : ['#114357' , '#F29492'] , 
    } ,
    Drizzle : {
        iconName : "weather-hail" ,
        gradient : ['#C6FFDD' ,'#FBD786','#f7797d']  , 
    },
    Rain  : {
        iconName : "weather-rainy",
        gradient : ['#bdc3c7', '#2c3e50'] , 
    },
    Snow : {
        iconName : "weather-snowy",
        gradient : ['#E8CBC0' ,'#636FA4' ] , 
    },
    Clouds : {
        iconName : "weather-cloudy" ,
        gradient : ['#5D4157' , '#A8CABA'] , 
    },
    Clear : {
        iconName : "weather-sunny" ,
        gradient : ['#9CECFB' , '#65C7F7' , '#0052D4'] , 
    }
   
}


export default function  Weather({ temp , condition}){
    return ( 
                 <LinearGradient
                    colors={ weatherOptions["Clouds"].gradient }
                    style={ styles.container} >
                    <StatusBar barStyle="light-content" />
                    <View style={styles.halfContainer} >
                        <MaterialCommunityIcons size={150} name={ weatherOptions["Clouds"].iconName} color="white" />
                        <Text style={styles.temp}>{temp}℃</Text>
                    </View>
                    <View  style={styles.halfContainer}>
                    </View>
                </LinearGradient>
    );
           
}

Weather.propTypes  = {
    temp: PropTypes.number.isRequired ,
    condition : PropTypes.oneOf([
        "Thunderstorm" ,
        "Drizzle",
        "Rain" , 
        "Snow" , 
        "Atmosphere" , 
        "Clear" , 
        "Clouds" ,
        "Haze",
        "",
    ]).isRequired
}


const styles = StyleSheet.create({
    container : {
        flex : 1 , 
        justifyContent : "center" , 
        alignItems : "center" , 
    } , 
    halfContainer :{
        flex : 1 , 
        justifyContent : "center" , 
        alignItems : "center" ,
    } ,
    temp : {
        fontSize : 32 ,
        color : "white" , 
    }
})

