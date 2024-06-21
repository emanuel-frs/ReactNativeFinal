import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { JogoEspecificoProps } from '../../routes/stack';

// Esta lista será substituida por uma requisição de GET na api, que utilizara o id pego pelo route para pegar as informações
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
    const { id } = route.params;

    return (
        <View style={styles.container}>
            {lista.length > 0 ? lista.map((item) => {
                return (
                    <View style={{ flex: 1 }}>
                        <Image style={styles.jogoImg} source={item.img} />
                        <View style={styles.jogoInfosWrapper}>
                            <View style={styles.jogoInfosContainer}>
                                <Text style={styles.jogoNome}>
                                    Nome do jogo
                                </Text>
                                <View style={styles.jogoInfosBasicasContainer}>
                                    <Text style={styles.jogoInfosBasicas}>
                                        Data de lançamento: <Text style={styles.jogoInfosBasicasValue}>{item.dataLanc}</Text>
                                    </Text>
                                    <Text style={styles.jogoInfosBasicas}>
                                        Gênero: <Text style={styles.jogoInfosBasicasValue}>{item.genero}</Text>
                                    </Text>
                                    <Text style={styles.jogoInfosBasicas}>
                                        Descrição: <Text style={styles.jogoInfosBasicasValue}>{item.descricao}</Text>
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.jogoInfosContainerInferior}>
                                <View style={styles.jogoPreçoContainer}>
                                    <Ionicons name="pricetags-sharp" size={32} color="#FDE251" /><Text style={styles.jogoPreço}>R$ {id}</Text>
                                </View>
                                <TouchableOpacity style={styles.editarBtn}>
                                    <Text style={styles.editBtnTexto}>
                                        Editar Jogo
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.excluirBtn}>
                                    <Text style={styles.excluirBtnTexto}>
                                        Excluir Jogo
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )
            }) : (
                <View style={styles.erroContainer}>
                    <Text style={styles.naoEncontrado}>
                        Jogo Não Encontrado
                    </Text>
                </View>
            )}
        </View >
    );
};

