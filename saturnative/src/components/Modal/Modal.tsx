import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Modal, View, Text, Pressable, StyleSheet, TouchableOpacity } from "react-native";

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
                <TouchableOpacity style={styles.closeBtn} onPress={() => onClose()}>
                    <Text style={styles.closeBtnTxt}>
                        X
                    </Text>
                </TouchableOpacity>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={[styles.modalText, styles.padraoTxt]}>Tem certeza que deseja excluir?</Text>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={excluir}
                            >
                            <Text style={[styles.textStyle, styles.padraoTxt]}>Excluir Jogo</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    closeBtn: {
        width: 50,
        height: 50,
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1
    },
    closeBtnTxt: {
        color: 'white',
        fontSize: 40,
        fontFamily: 'Museo-Moderno-Medium',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    padraoTxt: {
        fontFamily: 'Museo-Moderno-Medium',
    },
    textStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        color: '#FDE251',
        fontSize: 28,
    },
});
