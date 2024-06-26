import React, { useContext, useEffect, useState } from "react";
import { KeyboardAvoidingView, View, Image, TouchableOpacity, TextInput, Text } from "react-native"
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import * as SecureStore from 'expo-secure-store';
import { User, UserContext, UserContextType } from "../../contexts/UserContext";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [invalido, setInvalido] = useState<boolean>(false);
    const [btnDesabilitado, setBtnDesabilitado] = useState<boolean>(true);
    const { users, setEstaLogado, estaConectado } = useContext(UserContext) as UserContextType;

    const todosCamposPreenchidos = () => {
        return (
            username !== '' &&
            password !== ''
        );
    };

    const handleLogin = async () => {
        const user = users.find((user: User) => user.username === username && user.senha === password);
        if (user) {
            await SecureStore.setItemAsync('user', JSON.stringify(user))
            setInvalido(false);
            setEstaLogado(true)
        } else {
            setInvalido(true);
        }
    };

    useEffect(() => {
        if(estaConectado && todosCamposPreenchidos()){
            setBtnDesabilitado(false)
        } else {
            setBtnDesabilitado(true)
        }
    },[password,username,estaConectado])

    return (
            <KeyboardAvoidingView style={styles.background}>
                {!estaConectado &&
                <View style={styles.semConexao}>
                    <Text style={styles.semConexaoTxt}>
                        Dispositivo sem conexão com a internet
                    </Text>
                </View>
                }
                <View>
                    <Image source={require('../../../assets/saturnativeLogo.png')} style={styles.logo} />
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
                        <TouchableOpacity disabled={btnDesabilitado} style={[!btnDesabilitado ? styles.btnEntrar : styles.btnBloqueado]} onPress={handleLogin}>
                            <Text style={styles.padraoText}> <Ionicons name="paper-plane" size={30} color="#fff" /></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
    );
}
