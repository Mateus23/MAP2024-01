import { StyleSheet, Text, View } from 'react-native';
import WeatherChart from './WeatherChart';
import { mockData } from './mockData';

export default function App() {

  const hours = mockData.hourly.time;
  const temperatures = mockData.hourly.temperature_2m;
  const rainProbabilities = mockData.hourly.precipitation_probability;

  return (
    <View style={styles.container}>
      <WeatherChart
        hours={hours}
        values={temperatures}
        yDomain={{min: 10, max: 35}}
      />
      <WeatherChart
        hours={hours}
        values={rainProbabilities}
        yDomain={{min: 0, max: 100}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
