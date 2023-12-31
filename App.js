import {Alert, StatusBar, StyleSheet, View} from 'react-native';
import * as Location from 'expo-location';
import {Loading} from "./components/Loading";
import {useEffect, useState} from "react";
import axios from "axios";
import {Weather} from "./components/Weather";

const API_KEY = "40fe69bd29808302d733b9ad75ef9a62";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  
  const getWeather = async (latitude, longitude) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    const {data} = await axios.get(url);
  
    setData(data);
  }
  
  useEffect(() => {
    (async () => {
      
      const { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }
      
      try {
        const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
        await getWeather(latitude, longitude);
        setIsLoading(false);
      } catch {
        Alert.alert('Location not found');
      }
    })();
  }, []);
  
  return (
      <View style={styles.container}>
        {isLoading ? <Loading/> : <Weather
            temperature={data.main}
            weatherOptions={data.weather[0]}
            wind={data.wind}
            city={data.name}
        />}
        <StatusBar barStyle="dark-content"/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
