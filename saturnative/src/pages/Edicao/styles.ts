import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#14151E',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagem: {
        flex: 1,
        width: '100%',
    },
    placeholder: {
        color: '#FDE251',
        marginTop: 15,
        paddingHorizontal: 15,
        fontSize: 15,
    },
    input: {
        marginVertical: 5,
        marginBottom: 0,
        color: '#FDE251',
        width: '100%',
        height: 44,
        borderRadius: 21,
        backgroundColor: '#1D1E2B',
        borderWidth: 2,
        borderColor: '#373A4D',
        paddingHorizontal: 15,
    },
    forms: {
        flex: 1,
        width: '100%',
        padding: 40,
        paddingBottom: 0,
        justifyContent: 'flex-end',
    },
    textEnviar: {
        fontSize: 20,
        color: '#14151E',
    },
    textCancelar: {
        fontSize: 20,
        color: '#ffffff',
    },
    botoes: {
        height: 170,
        justifyContent: 'space-evenly',
        padding: 40,
        width: '100%',
    },
    enviar: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40,
        backgroundColor: '#FDE251',
        height: 42,
        borderRadius: 10,
    },
    cancelar: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40,
        backgroundColor: '#D92744',
        height: 42,
        borderRadius: 10,
    },
    drawer: {
        backgroundColor: '#FDE251',
        width: '100%',
        height: 100,
    },
    errorText: {
        color: 'red',
        marginTop: 5,
        marginHorizontal: 15,
    },
    padraoText:{
        fontFamily: 'Museo-Moderno-Medium',
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
    scroll:{
        backgroundColor: '#14151E'
    }
});