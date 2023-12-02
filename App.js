import { View, Alert } from 'react-native';
import * as Location from 'expo-location';
import {Loading} from "./components/Loading";
import {useEffect, useState} from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    (async () => {
      
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }
      
      try {
        const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync({});
        setIsLoading(false);
      } catch {
        Alert.alert('Location not found');
      }
    })();
  }, []);
  
  return (
      isLoading ? <Loading /> : null
  );
}
