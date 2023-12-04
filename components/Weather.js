import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import {WEATHER_OPTIONS} from "../constants";

export const Weather = ({temperature, weatherOptions, wind, city}) => {
  return (
      <LinearGradient
          colors={WEATHER_OPTIONS[weatherOptions.main].gradient}
          style={styles.container}
      >
          <View style={styles.col}>
            <Text style={styles.city}>{city}</Text>
            <MaterialCommunityIcons name={WEATHER_OPTIONS[weatherOptions.main].iconName} size={96} color="white"/>
            <Text style={styles.temp}>{Math.round(temperature.temp)}°</Text>
            <Text style={styles.tempSmall}>Feels like: {Math.round(temperature.feels_like)}°</Text>
            <Text style={styles.tempSmall}>Max: {Math.round(temperature.temp_max)}°</Text>
            <Text style={styles.tempSmall}>Min: {Math.round(temperature.temp_min)}°</Text>
          </View>
    
          <View style={styles.col}>
            <View style={{...styles.col, ...styles.textWrapper}}>
              <Text style={styles.subtitle}>{weatherOptions.description}</Text>
              <Text style={styles.subtitle}>Wind Speed: {wind.speed} km/h</Text>
            </View>
          </View>
        <StatusBar barStyle="light-content"/>
      </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  col: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  city: {
    fontSize: 52,
    color: "white",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  tempSmall: {
    fontSize: 20,
    color: "white",
  },
  textWrapper: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: 300,
  },
  subtitle: {
    color: "white",
    fontWeight: 600,
    fontSize: 24,
    textTransform: "capitalize",
  }
})