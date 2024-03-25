import { View, Text, StyleSheet, Image } from 'react-native';
import pokedex from '../../assets/pokedex.json'

const PokemonScreen = ({ route }) => {
  console.log('route: ', route)
  const id = route.params.id
  const idString = id.toString().padStart(3, '0');
  const imageSrc = require(`../../assets/images/${idString}.png`)

  const pokemonInfo = pokedex[id -1];

    return (
        // Adicionar imagem, tipos e status para o pokémon do id escolhido
      <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'space-around', marginTop: '30px' }}>
        <View style={styles.imgContainer}>
          <Image source={imageSrc} style={styles.image}/>
        </View>
        <Text style={styles.name}>
          {pokemonInfo.name.english}
        </Text>
        <View style={styles.types}>
          {pokemonInfo.type.map(type => (
            <Text style={{borderWidth: 1, borderColor: 1}}> {type} </Text>
          ))}
        </View>
        <View style={styles.att}>
          {Object.keys(pokemonInfo.base).map(att => (
            <View style={{width: '50%'}}>
              <Text > {`${att}:  ${pokemonInfo.base[att]}`} </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    image: {
        flex: 1,
        aspectRatio: 1,
    },
    imgContainer: {
      width: '60%',
      aspectRatio: 1,
      borderWidth: 1,
      borderColor: '#333',
      padding: 10,
    },
    name: {
      fontSize: '23px',
      fontWeight: 'bold'
    },
    types: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      gap: '30px'
    },
    att: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignContent: 'flex-start',
      width: '80%',
      flexWrap: 'wrap',
      alignItem: 'flex-start',
      padding: '16px',
      borderWidth: 2,
      borderColor: '#000'
    }

})

export default PokemonScreen;