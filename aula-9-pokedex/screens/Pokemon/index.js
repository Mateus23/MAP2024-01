import { View, Text } from 'react-native';

const PokemonScreen = ({ id }) => {
    return (
        // Adicionar imagem, tipos e status para o pokémon do id escolhido
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
        <Text>{"PokemonScreen"}</Text>
      </View>
    );
  }

export default PokemonScreen;