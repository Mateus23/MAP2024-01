import { View, FlatList } from 'react-native';
import PokemonButton from '../../components/PokemonButton';
import pokedex from '../../assets/pokedex.json'

const PokedexScreen = () => {
    // Adicionar uma flatlist com os pokemons, usando o PokemonButton
    // Usar o redux para saber se foi capturado ou não, os não capturados devem
    // receber uma prop de shadowed
    console.log('Pokedex: ', pokedex)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
        <FlatList
          data={pokedex}
          renderItem={({item}) => <PokemonButton id={item.id} />}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    );
  }

export default PokedexScreen;