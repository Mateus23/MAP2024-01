import { Button, View, Text } from 'react-native';

import { useState } from 'react';

// Trabalhar na parte visual da página inicial
const HomeScreen = ({ navigation }) => {
  const [openModal, setOpenModal] = useState(false);
    return (
      <View>
        <Text>
          Jogo da Veia
        </Text>
        <Button
          title="Play"
          onPress={() => setOpenModal(true)} // Esse botão precisa ir para a página do jogo
        />
      </View>
    );
  }

export default HomeScreen;