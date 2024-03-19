import { View, Text } from 'react-native';

const PokedexScreen = ({ id }) => {
    // Adicionar uma flatlist com os pokemons, usando o PokemonButton
    // Usar o redux para saber se foi capturado ou não, os não capturados devem
    // receber uma prop de shadowed
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
        <Text>{"PokedexScreen"}</Text>
      </View>
    );
  }

export default PokedexScreen;