import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Imagem from '../../components/ImagePicker/ImagePicker';
import InputDeData from '../../components/InputDeData/InputDeData';
import PriceInput from '../../components/InputDePreco/InputDePreco';
import { useNavigation } from '@react-navigation/native';
import { styles } from "./styles";
import { useRefresh } from '../../contexts/RefreshContext';

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
    const { setRefresh } = useRefresh();

    const handleCancelar = () => {
        navigation.goBack();
    };

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
            setRefresh(prev => !prev); 
            navigation.navigate('Home');
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
                        <Text style={[styles.placeholder, styles.padraoText]}>Nome do jogo</Text>
                        <TextInput
                            style={[styles.input, styles.padraoText]}
                            value={nomeJogo}
                            onChangeText={(text) => setNomeJogo(text)}
                        />
                    </View>
                    <View>
                        <Text style={[styles.placeholder, styles.padraoText]}>Data de lançamento</Text>
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
                        <Text style={[styles.placeholder, styles.padraoText]}>Gênero</Text>
                        <TextInput
                            style={[styles.input, styles.padraoText]}
                            value={genero}
                            onChangeText={(text) => setGenero(text)}
                        />
                    </View>
                    <View>
                        <Text style={[styles.placeholder, styles.padraoText]}>Descrição</Text>
                        <TextInput
                            style={[styles.input, styles.padraoText]}
                            value={descricao}
                            onChangeText={(text) => setDescricao(text)}
                        />
                    </View>
                    <View>
                        <Text style={[styles.placeholder, styles.padraoText]}>Preço</Text>
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
                        <Text style={[styles.textEnviar, styles.padraoText]}>Enviar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancelar} onPress={handleCancelar}>
                        <Text style={[styles.textCancelar, styles.padraoText]}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

