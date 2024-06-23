import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Imagem from '../../components/ImagePicker/ImagePicker';
import InputDeData from '../../components/InputDeData/InputDeData';
import PriceInput from '../../components/InputDePreco/InputDePreco';
import { useNavigation } from '@react-navigation/native';

export default function Edicao() {
    const [nomeJogo, setNomeJogo] = useState('');
    const [dataLancamento, setDataLancamento] = useState('');
    const [genero, setGenero] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState(0);
    const [dataValida, setDataValida] = useState(true);
    const [enviado, setEnviado] = useState(false);
    const [imagemSelecionada, setImagemSelecionada] = useState<string | null>(null);
    const navigation = useNavigation();


    const handleCancelar = () => {
        navigation.goBack()
    }

    const todosCamposPreenchidos = () => {
        return (
            nomeJogo !== '' &&
            dataLancamento !== '' &&
            genero !== '' &&
            descricao !== '' &&
            preco > 0 &&
            dataValida &&
            imagemSelecionada !== null
        );
    };

    const handleEnviar = () => {
        if (todosCamposPreenchidos()) {
            console.log('Nome do Jogo:', nomeJogo);
            console.log('Data de Lançamento:', dataLancamento);
            console.log('Gênero:', genero);
            console.log('Descrição:', descricao);
            console.log('Preço:', preco);
            console.log('Imagem:', imagemSelecionada);
            setEnviado(true);
        }
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.forms}>
                    <View style={styles.imagem}>
                        <Imagem onImageSelected={setImagemSelecionada} />
                    </View>
                    <View>
                        <Text style={styles.placeholder}>Nome do jogo</Text>
                        <TextInput
                            style={styles.input}
                            value={nomeJogo}
                            onChangeText={(text) => setNomeJogo(text)}
                        />
                    </View>
                    <View>
                        <Text style={styles.placeholder}>Data de lançamento</Text>
                        <InputDeData
                            value={dataLancamento}
                            onChange={(text, isValid) => {
                                setDataLancamento(text);
                                setDataValida(isValid);
                            }}
                        />
                        {!dataValida && <Text style={styles.errorText}>Data inválida</Text>}
                    </View>
                    <View>
                        <Text style={styles.placeholder}>Gênero</Text>
                        <TextInput
                            style={styles.input}
                            value={genero}
                            onChangeText={(text) => setGenero(text)}
                        />
                    </View>
                    <View>
                        <Text style={styles.placeholder}>Descrição</Text>
                        <TextInput
                            style={styles.input}
                            value={descricao}
                            onChangeText={(text) => setDescricao(text)}
                        />
                    </View>
                    <View>
                        <Text style={styles.placeholder}>Preço</Text>
                        <PriceInput
                            onPriceChange={(newPrice) => setPreco(newPrice)}
                        />
                    </View>
                </View>
                <View style={styles.botoes}>
                    <TouchableOpacity
                        style={[styles.enviar, !todosCamposPreenchidos() && { opacity: 0.5 }]}
                        disabled={!todosCamposPreenchidos()}
                        onPress={handleEnviar}
                    >
                        <Text style={styles.textEnviar}>Enviar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancelar} onPress={handleCancelar}>
                        <Text style={styles.textCancelar}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
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
});
