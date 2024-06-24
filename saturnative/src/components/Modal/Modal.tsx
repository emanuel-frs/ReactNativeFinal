import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";

type TemCertezaProps = {
    visible: boolean;
    onClose: () => void;
}

export function TemCerteza({ visible, onClose }: TemCertezaProps) {
    const [excluido, setExcluido] = useState(false);
    const navigation: any = useNavigation();

    function excluir(){
        setExcluido(true);
        onClose();
        navigation.navigate('Home');
    }

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Tem certeza que deseja excluir?</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={excluir}
                            >
                            <Text style={styles.textStyle}>Excluir Jogo</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: 20
    },
    modalView: {
        backgroundColor: '#14151E',
        borderWidth: 3,
        borderColor: '#D92744',
        padding: 35,
        alignItems: 'center',
    },
    button: {
        marginTop: 20,
        flexDirection: 'row',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 55
    },
    buttonClose: {
        backgroundColor: '#D92744',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        color: '#FDE251',
        fontSize: 28
    },
});
