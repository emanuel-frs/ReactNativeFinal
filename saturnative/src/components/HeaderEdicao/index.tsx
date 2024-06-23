import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack";

export default function HeaderEdicao() {

    const navigation = useNavigation<StackTypes>();

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                navigation.goBack()
            }}>
                <FontAwesome5 name="long-arrow-alt-left" size={30} color="#14151E" />
            </TouchableOpacity>
            <Text style={{fontSize: 25}}>Editar</Text>
            <Image style={{width: 50, height: 50}} source={require('../../../assets/logos/logoDark.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 90,
        alignItems:'center',
        justifyContent: "space-between",
        paddingTop:30,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#FDE251',
        flexDirection: 'row',
    },

})