import { Button, View, Text } from 'react-native';

import PokemonButton from '../../components/PokemonButton';

const HomeScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
        <Button
          title="Pokedex"
          onPress={() => navigation.navigate('Pokedex')}
        />
        <Button
          title="Search"
          onPress={() => navigation.navigate('Search')}
        />
        <PokemonButton id={1} />
      </View>
    );
  }

export default HomeScreen;