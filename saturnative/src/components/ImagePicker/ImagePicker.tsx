import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome6 } from '@expo/vector-icons';

interface ImagemProps {
    onImageSelected: (imageUri: string | null) => void;
}

const Imagem: React.FC<ImagemProps> = ({ onImageSelected }) => {
    const [imagemSelecionada, setImagemSelecionada] = useState<string | null>(null);

    const selecionarImagem = async () => {
        let resultado = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        if (!resultado.canceled && resultado.assets?.length > 0) {
            setImagemSelecionada(resultado.assets[0].uri);
            onImageSelected(resultado.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            {imagemSelecionada ? 
                <TouchableOpacity style={styles.botaoSelionada} onPress={selecionarImagem}>
                    <Text style={[styles.textoBotaoSelecionado, styles.padraoText]}>Imagem Selecionada</Text>
                    <FontAwesome6 name="file-import" size={20} color="#FDE251"/>
                </TouchableOpacity> :
                <TouchableOpacity style={styles.botao} onPress={selecionarImagem}>
                    <Text style={[styles.textoBotao, styles.padraoText]}>Importar Imagem</Text>
                    <FontAwesome6 name="file-import" size={20} color="#1D1E2B"/>
                </TouchableOpacity>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        width: '100%'
    },
    botao: {
        flexDirection: 'row',
        backgroundColor: '#FDE251',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 21,
        borderWidth: 3,
        borderColor: '#373A4D',
        width: '100%'
    },
    botaoSelionada: {
        flexDirection: 'row',
        backgroundColor: '#1D1E2B',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 21,
        borderWidth: 3,
        borderColor: '#FDE251',
        width: '100%'
    },
    textoBotao: {
        color: '#1D1E2B',
        fontSize: 16,
        marginRight: 5,
    },
    textoBotaoSelecionado: {
        color: '#FDE251',
        fontSize: 16,
        marginRight: 5,
    },
    imagem: {
        width: 200,
        height: 200,
    },
    padraoText:{
        fontFamily: 'Museo-Moderno-Medium',
    }
});

export default Imagem;
