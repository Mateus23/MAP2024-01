import { View, Text } from "react-native"

// Esse componente deve mostrar o jogador ativo, ou seja,
// O que tem a jogada a fazer
const TurnRecorder = ({playerName}) => {
    return (<View>
        <Text>
            {playerName}
        </Text>
    </View>)
}

export default TurnRecorder