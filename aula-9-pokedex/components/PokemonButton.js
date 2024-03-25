import { Pressable , StyleSheet, Image, Text } from "react-native";
import PropTypes from 'prop-types';
import { useNavigation } from "@react-navigation/native";
import pokedex from '../assets/pokedex.json'

const PokemonButton = ({ id, shadowed = false }) => {
    const navigation = useNavigation();
    const idString = id.toString().padStart(3, '0');
    const imageSrc = require(`../assets/images/${idString}.png`)

    return (
        // O botão deve navegar para a screen pokemon, passando o id como parametro
        // adicionar a imagem ao pressable
        // Se estiver shadowed, a imagem deve estar escura
        <Pressable style={styles.container} onPress={() => navigation.navigate('Pokemon', {id})}>
            <Image source={imageSrc} style={styles.image}/>
            <Text style={styles.text}>PokeButton</Text>
        </Pressable >
    )
}

PokemonButton.propTypes = {
    id: PropTypes.number.isRequired,
    shadowed: PropTypes.bool,
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: '#bbb',
        padding: 10,
        margin: 4,
        alignContent: 'center'
    },
    image: {
        height: 100,
        width: 100,
    },
    text: {
        fontSize: 15,
        textAlign: 'center',
    }

})

export default PokemonButton