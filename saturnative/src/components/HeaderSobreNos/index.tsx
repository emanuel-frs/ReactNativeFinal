import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack";
import { DrawerTypes } from "../../routes/drawer";

export default function HeaderSobreNos() {

    const navigation = useNavigation<DrawerTypes>();

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                navigation.toggleDrawer()
            }}>
                <Feather name="menu" size={24} color="#FDE251" />
            </TouchableOpacity>
            <Text style={styles.padraoText}>SOBRE NÓS</Text>
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
        backgroundColor: '#1D1E2B',
        flexDirection: 'row',
    },
    padraoText:{
        fontFamily: 'Museo-Moderno-Medium',
        fontSize: 25,
        color:'#FDE251'
    }
})