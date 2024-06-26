import { View, Image, Text, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { styles } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { JogoEspecificoProps } from '../../routes/drawer';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { TemCerteza } from '../../components/Modal/Modal';
import { deleteJogo, getJogoById } from '../../services/jogosServices';
import { StackTypes } from '../../routes/stack';
import { useRefresh } from '../../contexts/RefreshContext';

type JogoType = {
    dataLancamento: string,
    descricao: string,
    genero: string,
    id: string,
    img: string,
    nome: string,
    preco: string
}

export default function JogoEspecifico({ route }: JogoEspecificoProps) {
    const [modalVisible, setModalVisible] = useState(false);
    const [jogo, setJogo] = useState<JogoType>();
    const [isLoading, setIsLoading] = useState<boolean>();

    const { refresh } = useRefresh();

    const navigation = useNavigation<StackTypes>();

    const { id } = route.params;

    const getJogo = async () => {
        setIsLoading(true)
        try {
            const { data } = await getJogoById(id);
            setJogo(data)
        } catch (err) {
            console.log(err)
        }
        setIsLoading(false)
    }

    const deletaJogo = async (id: number | string) => {
        try {
            const { data } = await deleteJogo(id);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getJogo()
    }, [id, refresh])

    const handleEditar = () => {
        navigation.navigate('Edicao', { id: id });
    }

    const handleExcluir = () => {
        setModalVisible(true)
    }

    const handleModal = async (id: number | string) => {
        deletaJogo(id)
        setModalVisible(false)
    }

    return (
        <>
            <ScrollView style={styles.scroll}>
                <TemCerteza visible={modalVisible} onClose={() => handleModal(id)} />
                <View style={styles.container}>
                    {jogo && isLoading == false ? (
                        <View key={jogo.id} style={{ flex: 1 }}>
                            <Image style={styles.jogoImg} source={{ uri: jogo.img }} />
                            <View style={styles.jogoInfosWrapper}>
                                <View style={styles.jogoInfosContainer}>
                                    <Text style={[styles.jogoNome, styles.padraoText]}>
                                        {jogo.nome}
                                    </Text>
                                    <View style={styles.jogoInfosBasicasContainer}>
                                        <Text style={[styles.jogoInfosBasicas, styles.padraoText]}>
                                            Data de lançamento: <Text style={styles.jogoInfosBasicasValue}>{jogo.dataLancamento}</Text>
                                        </Text>
                                        <Text style={[styles.jogoInfosBasicas, styles.padraoText]}>
                                            Gênero: <Text style={styles.jogoInfosBasicasValue}>{jogo.genero}</Text>
                                        </Text>
                                        <Text style={[styles.jogoInfosBasicas, styles.padraoText]}>
                                            Descrição: <Text style={styles.jogoInfosBasicasValue}>{jogo.descricao}</Text>
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.jogoInfosContainerInferior}>
                                    <View style={styles.jogoPreçoContainer}>
                                        <Ionicons name="pricetags-sharp" size={32} color="#FDE251" />
                                        <Text style={[styles.jogoPreço, styles.padraoText]}>R$ {jogo.preco}</Text>
                                    </View>
                                    <TouchableOpacity style={styles.editarBtn} onPress={() => handleEditar()}>
                                        <Text style={[styles.editBtnTexto, styles.padraoText]}>
                                            Editar Jogo
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.excluirBtn} onPress={() => handleExcluir()}>
                                        <Text style={[styles.excluirBtnTexto, styles.padraoText]}>
                                            Excluir Jogo
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ) : isLoading ? (
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <ActivityIndicator size={100} color={'#FDE251'} />
                        </View>
                    ) : (
                        <View style={styles.erroContainer}>
                            <Text style={[styles.naoEncontrado, styles.padraoText]}>
                                Jogo Não Encontrado
                            </Text>
                        </View>
                    )}
                </View >
            </ScrollView>
        </>
    );
}
