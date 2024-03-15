import { View, StyleSheet } from 'react-native';
import Cell from './Cell';

const Table = ({ onCellClicked, tableState }) => {
    return (
        // O tabuleiro pode ter o desenho de um jogo da velha de 2 maneiras:
        // Usando BackgroundImage, ou usando borda no componente Cell. Fica a seu critério
        <View style={styles.table}>
            {/* Aqui deve ocorrer a instanciação dos 9 componentes de Cell */}
            {/* Dica: usar map passando o index, pois será necessário a identificação da célula */}
            {/* Ajustar o layout usando flexbox para que as células fiquem no formato de jogo da velha*/}
            {
                tableState.map((cellState, id) => {
                    return(
                        <Cell
                            onClick={onCellClicked}
                            id={id}
                            cellState={cellState}
                        />)
                })
            }
        </View>
    );
  }

const styles = StyleSheet.create({
    table: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
})

export default Table;