import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#14151E'
    },

    logo: {
        marginTop: -20,
        maxWidth: 300, 
        maxHeight: 300, 
        resizeMode: 'contain', 
    },
    containerLogin: {
        flex: 1,
        alignItems: 'center',
        width: '90%',
    },
    input: {
        backgroundColor: '#1D1E2B',
        width: '90%',
        marginBottom: 20,
        color: '#FDE24F',
        borderRadius: 25,
        padding: 7,
    },
    btnEntrar: {
        backgroundColor: '#1D1E2B',
        width: '25%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },
    tituloEntrar: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -45,
        fontSize: 40,
        color: '#FDE24F',

    },
    tituloEntrar2: {
        marginTop: 80,
        marginBottom: 30,
        fontSize: 25,
        color: '#FDE24F',

    },
    textImput: {
        color: '#FDE24F',
        padding: 5,
        width: 250,


    }



});