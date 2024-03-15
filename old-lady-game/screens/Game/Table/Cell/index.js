import { View, Image, Pressable } from 'react-native';

const Cell = ({ id, cellState, onClick }) => {
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Pressable 
          onLongPress={() => {}} // Deve cancelar o toque
          onPressIn={() => {}} // Deve fornecer feedback visual do quadrado escolhido
          onPressOut={() => onClick(id)} // Deve fazer a jogada usando o onClick
        >
            {/* Aqui deve ficar uma a parte visual, decidida pelo cellState se é X, O ou nada. Usar os assets peca1 e peca2 */}
        </Pressable>
      </View>
    );
  }

export default Cell;