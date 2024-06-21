import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack";

type JogoCardProp = {
    jogo: {
        id: number,
        name: string,
        img: any
    },
}

export default function JogoCard({ jogo }: JogoCardProp) {

    const navigation = useNavigation<StackTypes>();

    function handleDetalhes(id: number) {
        navigation.navigate("JogoEspecifico", {id: id})
    }

    return (
        <View style={styles.jogoCard} >
            <Image style={styles.jogoImg} source={jogo.img} />
            <View style={styles.jogoInfo}>
                <Text style={styles.jogoName}>
                    {jogo.name}
                </Text>
                <TouchableOpacity style={styles.jogoBtn} onPress={() => handleDetalhes(jogo.id)}>
                    <Text style={styles.jogoBtnText}>
                        Detalhes
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}