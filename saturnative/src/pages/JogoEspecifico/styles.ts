import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#14151E',
    },
    jogoImg: {
        width: '100%',
        height: 260,
        backgroundColor: 'grey'
    },
    jogoInfosWrapper: {
        flex: 1,
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    jogoInfosContainer: {
        width: '100%',
        alignItems: 'center',
        gap: 20,
        paddingTop: 10
    },
    jogoInfosContainerInferior: {
        width: '100%',
        alignItems: 'center',
        gap: 20
    },
    jogoNome: {
        color: '#FDE251',
        fontSize: 36,
        fontWeight: '600'
    },
    jogoInfosBasicasContainer: {
        width: "100%",
    },
    jogoInfosBasicas: {
        color: '#FDE251',
        fontSize: 18,
        fontWeight: '600'
    },
    jogoInfosBasicasValue: {
        color: 'white',
        fontWeight: '400'
    },
    jogoPreçoContainer: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 10
    },
    jogoPreço: {
        color: '#FDE251',
        fontSize: 32,
        textAlign: 'center'
    },
    editarBtn: {
        backgroundColor: "#FDE251",
        width: '100%',
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    editBtnTexto: {
        fontSize: 18,
        color: '#14151E',
        fontWeight: '600'
    },
    excluirBtn: {
        backgroundColor: "#d92744",
        width: '100%',
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    excluirBtnTexto: {
        fontSize: 18,
        color: 'white',
        fontWeight: '600'
    },
    erroContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    naoEncontrado: {
        color: '#FDE251',
        fontSize: 25,
        fontWeight: 'bold'
    },
    padraoText:{
        fontFamily: 'Museo-Moderno-Medium',
    }
})