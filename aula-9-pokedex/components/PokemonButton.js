import { Pressable , StyleSheet, Image, Text } from "react-native";
import PropTypes from 'prop-types';
import { useNavigation } from "@react-navigation/native";

const PokemonButton = ({ id, shadowed = false }) => {
    const navigation = useNavigation();
    const idString = id.toString().padStart(3, '0');
    const imageSrc = require(`../assets/images/${idString}.png`)

    return (
        // O botão deve navegar para a screen pokemon, passando o id como parametro
        // adicionar a imagem ao pressable
        // Se estiver shadowed, a imagem deve estar escura
        <Pressable onPress={() => console.log('button pressed')}>
            <Image src={imageSrc} style={styles.image}/>
            <Text>{'Pokemon button'}</Text>
        </Pressable >
    )
}

PokemonButton.propTypes = {
    id: PropTypes.number.isRequired,
    caught: PropTypes.bool,
}

const styles = StyleSheet.create({
    container: {
        height: 120,
        width: 100,
    },
    image: {
        height: 100,
        width: 100,
    },

})

export default PokemonButton