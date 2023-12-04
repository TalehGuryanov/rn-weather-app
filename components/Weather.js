import {StyleSheet, View, Text} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

export const Weather = ({temp, condition}) => {
  return (
    <View style={styles.container}>
      <View style={styles.col}>
        <Ionicons name="sunny" size={96} color="black"/>
        <Text style={styles.temp}>{temp}°</Text>
      </View>
  
      <View style={styles.col}>
      </View>
    </View>
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
  temp: {
    fontSize: 42,
  }
})