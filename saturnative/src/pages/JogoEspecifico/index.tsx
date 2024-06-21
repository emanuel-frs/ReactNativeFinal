import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const lista = [
    {
        id: 1,
        name: "nome do jogo",
        img: require('../../../assets/splash.png')
    },
    {
        id: 2,
        name: "nome do jogo",
        img: require('../../../assets/splash.png')
    },
    {
        id: 3,
        name: "nome do jogo",
        img: require('../../../assets/splash.png')
    },
    {
        id: 4,
        name: "nome do jogo",
        img: require('../../../assets/splash.png')
    },
    {
        id: 5,
        name: "nome do jogo",
        img: require('../../../assets/splash.png')
    },
]

export default function Jogos() {
    return (
        <View style={styles.container}>
            <FlatList
                data={lista}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={() => <View style={{height: 20}}/>}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.jogoCard} >
                            <Image style={styles.jogoImg} source={item.img} />
                            <View style={styles.jogoInfo}>
                                <Text style={styles.jogoName}>
                                    {item.name}
                                </Text>
                                <TouchableOpacity style={styles.jogoBtn}>
                                    <Text style={styles.jogoBtnText}>
                                        Detalhes
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    );
};

