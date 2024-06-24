import { View, FlatList } from 'react-native';
import { styles } from './styles';
import JogoCard from '../../components/JogoCard';
import { useEffect, useState } from 'react';
import { getAllJogos } from '../../services/jogosServices';

export default function Home() {

    const [jogos, setJogos] = useState();

    const getProdutosData = async () => {
        try{
            const { data } = await getAllJogos();
            setJogos(data)
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        getProdutosData()
    },[])

    return (
        <View style={styles.container}>
            <FlatList
                data={jogos}
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

