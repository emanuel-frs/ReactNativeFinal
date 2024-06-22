import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#14151E',
        padding: 40,
        paddingBottom: 0
    },

    logo: {
        marginTop: -20,
        maxWidth: 209, 
        maxHeight: 209, 
        resizeMode: 'contain', 
    },
    containerLogin: {
        alignItems: 'center',
        width: '100%',
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
    btnEntrar: {
        backgroundColor: '#D92744',
        width: 110,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },
    tituloEntrar: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -45,
        fontSize: 36,
        color: '#FDE24F',
    },
    tituloEntrar2: {
        marginTop: 80,
        marginBottom: 30,
        fontSize: 36,
        color: '#FDE24F',

    },
    textImput: {
        color: '#FDE24F',
        padding: 5,
        width: '100%',
        fontSize: 15,
        marginTop: 15,
        paddingHorizontal: 15,
    },
    containerBtn:{
        height:150,
        justifyContent: 'center'
    },
    btnBloqueado:{
        backgroundColor: '#2B2C34',
        width: 110,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },
    invalido:{
        color: '#D92744'
    },
    inputErro:{
        borderColor: 'red'
    }
});