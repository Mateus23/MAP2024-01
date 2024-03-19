import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import PokemonButton from '../../components/PokemonButton';

const SearchResultScreen = ({ searchResult }) => {
    return (
      // Criar uma lista para mostrar os resultados, usando o PokemonButton, com shadowed={false}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
        <Text>{"SearchResultScreen"}</Text>
      </View>
    );
  }

SearchResultScreen.propTypes = {
  searchResult: PropTypes.array.isRequired,
}

export default SearchResultScreen;