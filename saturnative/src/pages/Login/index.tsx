import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView, View, Image, TouchableOpacity, TextInput, Text, StyleSheet, Button } from "react-native"
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation(); 

    const handleLogin = () => {
        if (username === 'admin' && password === '1234') { 
            navigation.navigate('Home'); 
        } else {
            alert('Usuário ou senha incorretos');
        }
    };

    return (
        <KeyboardAvoidingView style={styles.background}>
            <View>
                <Image  source={require('../../../assets/saturnativeLogo.png')} style={styles.logo}/>
            </View>
            <Text style={styles.tituloEntrar}>SATURNATIVE</Text>
            <View>
                <Text style={styles.tituloEntrar2}>Entrar</Text>
            </View>
            <View style={styles.containerLogin}>
                <Text style={styles.textImput}>Usuário</Text>
                <TextInput
                    style={styles.input}
                    placeholder=''
                    autoCorrect={false}
                    onChangeText={(text) => setUsername(text)}
                />
                <Text style={styles.textImput}>Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder=''
                    autoCorrect={false}
                    secureTextEntry 
                    onChangeText={(text) => setPassword(text)}
                />
                <View style={styles.containerBtn}>
                    <TouchableOpacity style={styles.btnEntrar} onPress={handleLogin}>
                        <Text> <Icon name="paper-plane" size={30} color="#fff" /></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}
