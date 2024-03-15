import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';

// Não é necessário modificar esse componente
const InvalidMoveDialog = ({text, isOpen, onClickClose}) => {
  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={isOpen}
    >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>
                    {text}
                </Text>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={onClickClose}
                >
                    <Text style={styles.textStyle}>
                        OK
                    </Text>
                </Pressable>
            </View>
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default InvalidMoveDialog;