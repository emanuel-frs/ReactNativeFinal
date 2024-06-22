import { View, FlatList } from 'react-native';
import { styles } from './styles';
import JogoCard from '../../components/JogoCard';
import { MyDrawer } from '../../components/Drawer/Drawer';

//Esta lista será substituida por uma requisição na API usando useEffect
const lista = [
    {
        id: 1,
        name: "nome do jogo",
        img: require('../../../assets/Screenshot_1.jpg')
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

export default function Home() {
    return (
        <View style={styles.container}>
            <FlatList
                data={lista}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={() => <View style={{height: 20}}/>}
                renderItem={({ item }) => {
                    return (
                        <JogoCard key={item.id} jogo={item}/>
                    )
                }}
            />
        </View>
    );
};

