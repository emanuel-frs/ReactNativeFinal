import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { styles } from './styles';
import JogoCard from '../../components/JogoCard';
import { useEffect, useState } from 'react';
import { getAllJogos } from '../../services/jogosServices';

export default function Home() {
    const [jogos, setJogos] = useState();
    const [isLoading, setIsLoading] = useState<boolean>();

    const getProdutosData = async () => {
        setIsLoading(true)
        try{
            const { data } = await getAllJogos();
            setJogos(data)
        } catch(err) {
            console.log(err)
        }
        setIsLoading(false)
    }

    useEffect(()=>{
        getProdutosData()
    },[])

    return (
        <View style={styles.container}>
            {jogos && isLoading == false ? (
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
    );
};

