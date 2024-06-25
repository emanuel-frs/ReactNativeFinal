import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import Imagem from '../../components/ImagePicker/ImagePicker';
import InputDeData from '../../components/InputDeData/InputDeData';
import PriceInput from '../../components/InputDePreco/InputDePreco';
import { useNavigation } from '@react-navigation/native';
import { styles } from "./styles";
import { useRefresh } from '../../contexts/RefreshContext';
import { DrawerTypes } from '../../routes/drawer';
import { EdicaoProps } from '../../routes/stack';
import { getJogoById, updateJogoById } from '../../services/jogosServices';
import { ScrollView } from 'react-native-gesture-handler';

export default function Edicao({route}:EdicaoProps) {
    const [nomeJogo, setNomeJogo] = useState('');
    const [dataLancamento, setDataLancamento] = useState('');
    const [genero, setGenero] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState(0);
    const [dataValida, setDataValida] = useState(true);
    const [imagemSelecionada, setImagemSelecionada] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>();

    const navigation = useNavigation<DrawerTypes>();

    const { refresh, setRefresh } = useRefresh();

    const { id } = route.params;

    const pegaJogoPeloId = async(id:number | string) => {
        setIsLoading(true)

        try {
            const { data } = await getJogoById(id);
            setImagemSelecionada(data.img);
            setNomeJogo(data.nome);
            setDataLancamento(data.dataLancamento);
            setGenero(data.genero);
            setDescricao(data.descricao);
            setPreco(data.preco);
        } catch(err) {
            console.log(err);
        }

        setIsLoading(false)
    };

    const atualizaJogo = async(id:number | string, jogoAtualizado:{}) => {
        setIsLoading(true)

        try {
            const { data } = await updateJogoById(id, jogoAtualizado);
        } catch(err) {
            console.log(err);
        }

        setIsLoading(false)
    };

    useEffect(()=>{
        pegaJogoPeloId(id);
    },[id])

    const handleCancelar = () => {
        navigation.goBack();
    };

    const handleEnviar = () => {
        const jogoAtualizado={
            nome: nomeJogo,
            dataLancamento: dataLancamento,
            genero: genero,
            descricao: descricao,
            img: imagemSelecionada,
            preco: preco
        };

        atualizaJogo(id, jogoAtualizado);
        setRefresh(!refresh);
        navigation.navigate('JogoEspecifico', {id:id});
    };


    return (
        <>
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                        {id && isLoading == false ? (
                            <>
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
                            style={styles.enviar}
                            onPress={handleEnviar}
                        >
                            <Text style={[styles.textEnviar, styles.padraoText]}>Enviar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelar} onPress={handleCancelar}>
                            <Text style={[styles.textCancelar, styles.padraoText]}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                        </>
                        ) : isLoading ? (
                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                <ActivityIndicator size={100} color={'#FDE251'}/>
                            </View>
                        ) : (
                        <View style={styles.erroContainer}>
                        <Text style={[styles.naoEncontrado, styles.padraoText]}>
                            Jogo Não Encontrado
                        </Text>
                    </View>
                )}
                </View>
            </ScrollView>
        </>
    );
}

