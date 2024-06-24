import React, { useState } from "react";
import { KeyboardAvoidingView, View, Image, TouchableOpacity, TextInput, Text } from "react-native"
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [invalido, setInvalido] = useState<boolean>(false);
    const navigation : any = useNavigation();

    const todosCamposPreenchidos = () => {
        return (
            username !== '' &&
            password !== ''
        );
    };

    const handleLogin = () => {
        if (username === 'a' && password === '1') {
            navigation.navigate('Drawer');
            setInvalido(false);
        } else {
            setInvalido(true);
        }
    };

    return (
        <KeyboardAvoidingView style={styles.background}>
            <View>
                <Image  source={require('../../../assets/saturnativeLogo.png')} style={styles.logo}/>
            </View>
            <Text style={styles.tituloEntrar}>SATURNATIVE</Text>
            <View>
                <Text style={[styles.tituloEntrar2, styles.padraoText]}>Entrar</Text>
            </View>
            <View style={styles.containerLogin}>
                <Text style={[styles.textImput, styles.padraoText]}>Usuário</Text>
                <TextInput
                    style={[styles.input, styles.padraoText]}
                    placeholder=''
                    autoCorrect={false}
                    onChangeText={(text) => setUsername(text)}
                />
                <Text style={[styles.textImput, styles.padraoText]}>Senha</Text>
                <TextInput
                    style={[styles.input, styles.padraoText, invalido && styles.inputErro]}
                    placeholder=''
                    autoCorrect={false}
                    secureTextEntry 
                    onChangeText={(text) => setPassword(text)}
                />
                {invalido && <Text style={[styles.invalido, styles.padraoText]}>Email ou senha inválido</Text>}
                <View style={styles.containerBtn}>
                    <TouchableOpacity disabled={todosCamposPreenchidos() ? false : true} style={[todosCamposPreenchidos() ? styles.btnEntrar : styles.btnBloqueado]} onPress={handleLogin}>
                        <Text style={styles.padraoText}> <Ionicons name="paper-plane" size={30} color="#fff" /></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}
