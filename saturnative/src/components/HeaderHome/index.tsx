import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack";
import { DrawerTypes } from "../../routes/drawer";

export default function HeaderHome() {

    const navigation = useNavigation<DrawerTypes>();

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                navigation.toggleDrawer()
            }}>
                <Feather name="menu" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{fontSize: 25}}>Home</Text>
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