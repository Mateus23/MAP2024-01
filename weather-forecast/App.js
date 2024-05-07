import { StyleSheet, Text, View } from 'react-native';
import WeatherChart from './WeatherChart';
import { mockData } from './mockData';
import { useEffect, useState } from 'react';
import { getForecast } from './api-weather';
import Loading from './components/Loading';

export default function App() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    getForecast().then(
      (res) => {
        setData(res.data)
      }
    )
  }, [])

  if (data === undefined){
    return <Loading />
  }

  const hours = data.hourly.time;
  const temperatures = data.hourly.temperature_2m;
  const rainProbabilities = data.hourly.precipitation_probability;

  return (
    <View style={styles.container}>
      <WeatherChart
        hours={hours}
        values={temperatures}
        yDomain={{min: 10, max: 35}}
        color={{
          from: '#36d',
          to: '#d61',
          line: '#555'
        }}
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
