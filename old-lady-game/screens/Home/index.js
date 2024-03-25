import { Button, View, Text } from 'react-native';

// Trabalhar na parte visual da página inicial
const HomeScreen = ({ navigation }) => {
    return (
      <View>
        <Text>
          Jogo da Veia
        </Text>
        <Button
          title="Play"
          onPress={() => navigation.navigate('Game')} // Esse botão precisa ir para a página do jogo
        />
      </View>
    );
  }

export default HomeScreen;