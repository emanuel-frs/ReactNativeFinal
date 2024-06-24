import { View, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { JogoEspecificoProps } from '../../routes/stack';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { TemCerteza } from '../../components/Modal/Modal';

// Esta lista será substituída por uma requisição de GET na api, que utilizará o id pego pelo route para pegar as informações
const lista = [
    {
        id: 1,
        name: "nome do jogo",
        dataLanc: "21/03/2014",
        genero: "Terror",
        descricao: "Jogo de terror",
        img: require('../../../assets/Screenshot_1.jpg')
    }
]

export default function JogoEspecifico({ route }: JogoEspecificoProps) {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation: any = useNavigation();
    const { id } = route.params;

    const handleEditar = () => {
        navigation.navigate('Edicao');
    }

    return (
        <>
        <TemCerteza visible={modalVisible} onClose={() => setModalVisible(false)}/>
        <View style={styles.container}>
            {lista.length > 0 ? lista.map((item) => {
                return (
                    <View key={item.id} style={{ flex: 1 }}>
                        <Image style={styles.jogoImg} source={item.img} />
                        <View style={styles.jogoInfosWrapper}>
                            <View style={styles.jogoInfosContainer}>
                                <Text style={[styles.jogoNome, styles.padraoText]}>
                                    Nome do jogo
                                </Text>
                                <View style={styles.jogoInfosBasicasContainer}>
                                    <Text style={[styles.jogoInfosBasicas, styles.padraoText]}>
                                        Data de lançamento: <Text style={styles.jogoInfosBasicasValue}>{item.dataLanc}</Text>
                                    </Text>
                                    <Text style={[styles.jogoInfosBasicas, styles.padraoText]}>
                                        Gênero: <Text style={styles.jogoInfosBasicasValue}>{item.genero}</Text>
                                    </Text>
                                    <Text style={[styles.jogoInfosBasicas, styles.padraoText]}>
                                        Descrição: <Text style={styles.jogoInfosBasicasValue}>{item.descricao}</Text>
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.jogoInfosContainerInferior}>
                                <View style={styles.jogoPreçoContainer}>
                                    <Ionicons name="pricetags-sharp" size={32} color="#FDE251" />
                                    <Text style={[styles.jogoPreço, styles.padraoText]}>R$ {id}</Text>
                                </View>
                                <TouchableOpacity style={styles.editarBtn} onPress={handleEditar}>
                                    <Text style={[styles.editBtnTexto, styles.padraoText]}>
                                        Editar Jogo
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.excluirBtn} onPress={() => setModalVisible(true)}>
                                    <Text style={[styles.excluirBtnTexto, styles.padraoText]}>
                                        Excluir Jogo
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )
            }) : (
                <View style={styles.erroContainer}>
                    <Text style={[styles.naoEncontrado, styles.padraoText]}>
                        Jogo Não Encontrado
                    </Text>
                </View>
            )}
        </View >
        </>
    );
}
