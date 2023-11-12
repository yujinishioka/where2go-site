import { useEffect, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import api from '../api'
import ButtonPrimary from '../components/buttonPrimary';
import logo from '../assets/img/logo.png';
import colors from '../styles/colors';
import stylesGlobal from '../styles/global';
import styles from '../styles/login';

const Login = ({ onLogin }) => {
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState("yuuni@gmail.com");
    const [password, setPassword] = useState("123");
    const navigation = useNavigation();

    useEffect(() => {
        const getUsers = async () => {
          try {
            const usersString = await AsyncStorage.getItem('users');
            if (usersString !== null) {
              setUsers(JSON.parse(usersString));
            }
          } catch (error) {
            console.error(error);
          }
        };
        getUsers();
    }, []);
    
    const handleLogin = async () => {
        api.post('/login', {
            "login": email,
            "password": password
        }).then((resp) => {
            console.log("Verificando acesso");
            AsyncStorage.setItem('userToken', resp.data);
            onLogin();
        }).then(() => {
            console.log("Acesso autorizado");
            navigation.navigate("Home");
        }).catch((err) => {
            console.log(`Erro: ${err}`);
            alert(`Usuario ou senha invalido.`);
        });
    }

    return (
        <View style={stylesGlobal.containerPage}>
            <View style={styles.center}>
                <Text style={ styles.title }>Login</Text>
                <View style={ stylesGlobal.form }>
                    <View>
                        <Image style={{ width: 220, height: 80, alignSelf: 'center' }} source={ logo }/>
                    </View>
                    <View>
                        <View style={{marginBottom: 10}}>
                            <TextInput 
                                placeholder={"E-mail"} 
                                value={email} 
                                onChangeText={setEmail} 
                                placeholderTextColor={colors.lightGray} 
                                style={stylesGlobal.textInput}
                            />
                            <TextInput 
                                placeholder={"Senha"} 
                                secureTextEntry={true}
                                value={password} 
                                onChangeText={setPassword} 
                                placeholderTextColor={colors.lightGray} 
                                style={stylesGlobal.textInput}
                            />
                        </View>
                        <ButtonPrimary text="Login" onPress={ handleLogin }/>
                        <View style={styles.box}>
                            <Text style={stylesGlobal.text}>Ainda não tem uma conta?</Text>
                            <TouchableOpacity onPress={()=> navigation.navigate("Register")}>
                                <Text style={stylesGlobal.textBold}>
                                    Cadastre-se aqui!
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Login;