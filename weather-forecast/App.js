import { StyleSheet, Text, View } from 'react-native';
import WeatherChart from './WeatherChart';
import { useEffect, useState } from 'react';
import { getForecast } from './api-weather';
import Loading from './components/Loading';
import { DEFAULT_CITY_NAME, DEFAULT_LOCATION } from './constants';

export default function App() {
  const [data, setData] = useState();
  const [city, setCity] = useState(DEFAULT_CITY_NAME);
  const [location, setLocation] = useState(DEFAULT_LOCATION)

  useEffect(() => {
    getForecast(location).then(
      (res) => {
        setData(res.data)
      }
    )
  }, [])

  const hours = data ? data.hourly.time : [];
  const temperatures = data ? data.hourly.temperature_2m : [];
  const rainProbabilities = data ? data.hourly.precipitation_probability : [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {city}
      </Text>
      <WeatherChart
        hours={hours}
        values={temperatures}
        yDomain={{min: 10, max: 35}}
        color={{
          from: '#36d',
          to: '#d61',
          line: '#555'
        }}
        title={"Temperatura oC"}
      />
      <WeatherChart
        hours={hours}
        values={rainProbabilities}
        yDomain={{min: 0, max: 100}}
        color={{
          from: '#ddf',
          to: '#14a',
          line: '#555'
        }}
        title={"Probabilidade de Precipitação"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold'
  }
});
