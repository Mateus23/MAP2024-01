import { useState } from 'react';
import { View } from 'react-native';
import InvalidMoveDialog from '../../components/InvalidMoveDialog'
import EndGameDialog from '../../components/EndGameDialog'
import { initialTableState, fullTable, hasWinner } from './gameRules';
import GameTable from './Table';
import TurnRecorder from './TurnRecorder';

const PLAYERS_NAME = ['Jogador 1', 'Jogador 2'] // Cuidado!! PLAYERS_NAME[1] = 'Jogador 2'!! 
                                                // É preciso diminuir 1 do do index do tableState
                                                // para usar do jeito que estão pensando

const GameScreen = ({ navigation }) => {
  const [invalidMoveDialog, setInvalidMoveDialog] = useState(false);
  const [endGameDialog, setEndGameDialog] = useState(false)
  const [activePlayer, setActivePlayer] = useState(1);
  const [dialogState, setDialogState] = useState({
    text: '',
    isOpen: false,
    onClick: () => {}
  });
  const [table, setTable] = useState(initialTableState); // Dica: Só teremos renderização ao substituir o array usanto setTable

  const endGameText = ''; // usar ternário para decidir o texto
                          // Se houver vencedor é um texto declarando o vencedor,
                          // se não, é um texto declarando empate

  const resetGame = () => {
    // Caso o jogador queira jogar novamente, quais são os states que devem ser resetados?
    // Para qual valor eles precisam voltar?
  }

  const onCellClicked = (cellId) => {
    // Precisamos verificar se a jogada é válida
    //
    // Se não for, mostramos o dialog de jogada inválida
    //
    // Se for, realizamos a jogada, e precisamos verificar
    // se o jogo acabou (empate ou vitória)
    // 
    // Caso não tenha acabado, passar a jogada para o próximo jogador
    //
    // Caso tenha acabado, mostrar o EndGameDialog
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
      <TurnRecorder
        playerName={PLAYERS_NAME[activePlayer - 1]}
      />
      <GameTable
        // 
      />
      <EndGameDialog
        isOpen={endGameDialog}
        resultText={endGameText}
        onClickYes={() => {}} // O que acontece se o jogador quiser jogar novamente?
        onClickNo={() => {}} // Navegar de volta a tela de home
      />
      <InvalidMoveDialog
        isOpen={invalidMoveDialog}
        onClickClose={() => setInvalidMoveDialog(false)}
      />
    </View>
  );
}

export default GameScreen;