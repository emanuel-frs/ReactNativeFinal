import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import Imagem from '../../components/ImagePicker/ImagePicker';
import InputDeData from '../../components/InputDeData/InputDeData';
import PriceInput from '../../components/InputDePreco/InputDePreco';
import { useNavigation } from '@react-navigation/native';
import { styles } from "./styles";
import { ScrollView } from 'react-native-gesture-handler';
import { postJogo } from '../../services/jogosServices';
import { DrawerTypes } from '../../routes/drawer';

export default function Cadastro() {
    const [nomeJogo, setNomeJogo] = useState('');
    const [dataLancamento, setDataLancamento] = useState('');
    const [genero, setGenero] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState(0);
    const [dataValida, setDataValida] = useState(true);
    const [imagemSelecionada, setImagemSelecionada] = useState<string | null>(null);
    const navigation = useNavigation<DrawerTypes>();

    const criaNovoJogo = async(jogo:{}) => {
        try {
            const {data} = await postJogo(jogo)
            console.log(data)
        } catch(err) {
            console.log(err)
        }
    }

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
            const novoJogo = {
                nome: nomeJogo,
                dataLancamento: dataLancamento,
                genero: genero,
                descricao: descricao,
                img: imagemSelecionada,
                preco: preco
            }
            criaNovoJogo(novoJogo);
        }
    };

    return (
        <>
            <ScrollView>
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
            </ScrollView>
        </>
    );
}
