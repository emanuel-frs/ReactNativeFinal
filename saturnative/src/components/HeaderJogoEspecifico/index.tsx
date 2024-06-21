import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { View } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack";

export default function HeaderJogoEspecifico() {

    const navigation = useNavigation<StackTypes>();

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                navigation.goBack()
            }}>
                <FontAwesome5 name="long-arrow-alt-left" size={30} color="#FDE251" />
            </TouchableOpacity>
            <Image style={{width: 50, height: 50}} source={require('../../../assets/logos/logoYellow.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        alignItems:'center',
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#14151E',
        flexDirection: 'row',
    },

})