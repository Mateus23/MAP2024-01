import { Button, View, Text } from 'react-native';

import PokemonButton from '../../components/PokemonButton';

const HomeScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
        <Button
          title="Pokedex"
          onPress={() => navigation.navigate('Pokedex')}
        />
      </View>
    );
  }

export default HomeScreen;