import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type JogoCardProp = {
    jogo: {
        id: number,
        name: string,
        img: any
    },
}

export default function JogoCard({ jogo }: JogoCardProp) {
    return (
        <View style={styles.jogoCard} >
            <Image style={styles.jogoImg} source={jogo.img} />
            <View style={styles.jogoInfo}>
                <Text style={styles.jogoName}>
                    {jogo.name}
                </Text>
                <TouchableOpacity style={styles.jogoBtn}>
                    <Text style={styles.jogoBtnText}>
                        Detalhes
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}