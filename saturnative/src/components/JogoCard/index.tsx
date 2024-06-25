import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack";
import { DrawerTypes } from "../../routes/drawer";

type JogoCardProp = {
    jogo: {
        id: number,
        nome: string,
        img: any
    },
}

export default function JogoCard({ jogo }: JogoCardProp) {

    const navigation = useNavigation<DrawerTypes>();

    function handleDetalhes(id: number) {
        navigation.navigate("JogoEspecifico", {id: id})
    }

    return (
        <View style={styles.jogoCard} >
            <Image style={styles.jogoImg} source={{uri: jogo.img}} />
            <View style={styles.jogoInfo}>
                <Text style={[styles.jogoName,styles.padraoText]}>
                    {jogo.nome}
                </Text>
                <TouchableOpacity style={styles.jogoBtn} onPress={() => handleDetalhes(jogo.id)}>
                    <Text style={[styles.jogoBtnText,styles.padraoText]}>
                        Detalhes
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}