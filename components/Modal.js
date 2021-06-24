import React from 'react';
import { 
  Button, 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  FlatList,
  Modal 
} from 'react-native';

export default function Mensaje({
    modalVisible,
    itemSelected,
    handleConfirmDelete
})  {
    return(
        <Modal animationType="slide" visible={modalVisible} transparent>
            <View style={styles.modalContainer}>
                <View style={[styles.modalContent]}>
                    <Text style={styles.modalMessage}>¿Esta seguro que desea borrar?</Text>
                    <Text style={styles.modalTitle}>{itemSelected.value}</Text>
                    <View>
                    <Button 
                        onPress={handleConfirmDelete} 
                        title="CONFIRMAR" 
                    />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    screen: {
      padding: 30,
      marginTop: 30,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems:'center',
      justifyContent: 'space-between',
    },
    input: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      width: 200,
    },
    modalContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    items: {
      backgroundColor: '#FFFFFF',
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 20,
    },
    item: {
      padding: 10,
      marginTop: 10,
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderColor: 'black',
      borderWidth: 1,
    },
    modalContent: {
      padding: 30,
      backgroundColor: 'white',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalTitle: {
        fontSize: 30,
        marginTop: 10,
        marginBottom: 20,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
  });