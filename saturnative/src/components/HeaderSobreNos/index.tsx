import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack";

export default function HeaderSobreNos() {

    // const navigation = useNavigation<StackTypes>();

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                // navigation.goBack()
            }}>
                <Feather name="menu" size={24} color="#FDE251" />
            </TouchableOpacity>
            <Text style={{fontSize: 25, color:'#FDE251'}}>Sobre Nós</Text>
            <Image style={{width: 50, height: 50}} source={require('../../../assets/logos/logoYellow.png')}/>
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
        backgroundColor: '#14151E',
        flexDirection: 'row',
    },

})