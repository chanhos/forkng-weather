import React from 'react';
import { View, Text, StyleSheet , StatusBar } from 'react-native' ; 
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from "@expo/vector-icons" ; 
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze : {
        iconName : "weather-fog" ,
        gradient : ['#C9D6FF' , '#E2E2E2'] ,
        title : "안개" ,
        subtitle : "안개가 짙게껴있습니다. 운전에 주의하세요"
    } ,
    Thunderstorm : {
        iconName : "weather-lightning",
        gradient : ['#114357' , '#F29492'] , 
        title : "천둥/번개" ,
        subtitle : "천둥 번개가 칩니다. 조심하세요.."
    } ,
    Drizzle : {
        iconName : "weather-hail" ,
        gradient : ['#C6FFDD' ,'#FBD786','#f7797d']  , 
        title : "이슬비" ,
        subtitle : "비가올것 같습니다. 우산을 챙기세요"
    },
    Rain  : {
        iconName : "weather-rainy",
        gradient : ['#bdc3c7', '#2c3e50'] , 
        title : "비" ,
        subtitle : "비가 쏟아집니다. "
    },
    Snow : {
        iconName : "weather-snowy",
        gradient : ['#E8CBC0' ,'#636FA4' ] , 
        title : "눈" ,
        subtitle : "눈이옵니다. 빙판길을 조심하세요"
    },
    Clouds : {
        iconName : "weather-cloudy" ,
        gradient : ['#5D4157' , '#A8CABA'] , 
        title : "구름" ,
        subtitle : "구름이 꼇습니다. "
    },
    Clear : {
        iconName : "weather-sunny" ,
        gradient : ['#9CECFB' , '#65C7F7' , '#0052D4'] , 
        title : "맑음" ,
        subtitle : "화창한 날씨입니다."
    }
   
}


export default function  Weather({ temp , condition}){
    
    
    return ( 
                 <LinearGradient
                    colors={ weatherOptions[condition].gradient }
                    style={ styles.container} >
                    <StatusBar barStyle="light-content" />
                    <View style={styles.halfContainer} >
                        <MaterialCommunityIcons size={150} name={ weatherOptions[condition].iconName} color="white" />
                        <Text style={styles.temp}>{temp}℃</Text>
                    </View>
                    <View  style={{...styles.halfContainer , ...styles.textContainer}}>
                        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
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
        "Clouds",
        "Haze" ,
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
    } , 
    title : {
        color : "white" , 
        fontSize : 54  ,
        fontWeight : "300" , 
        marginBottom : 15 
        

    } ,
    subtitle : {
        color : "white" , 
        fontSize : 24 ,  
        fontWeight : "600" ,
    } ,
    textContainer : {
        paddingHorizontal : 20   , 
        alignItems : "flex-start"
    }
})

