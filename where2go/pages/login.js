import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import ButtonPrimary from '../components/buttonPrimary';

import logo from '../assets/img/logo.png';
import colors from '../styles/colors';
import stylesGlobal from '../styles/global';
import styles from '../styles/login';

const Login = ({ onLogin, setLogin }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <View>
            <Text style={ styles.title }>Login</Text>
            <View style={ stylesGlobal.form }>
                <View>
                    <Image style={{ width: 220, height: 80}} source={ logo }/>
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
                            value={password} 
                            onChangeText={setPassword} 
                            placeholderTextColor={colors.lightGray} 
                            style={stylesGlobal.textInput}
                        />
                    </View>
                    <ButtonPrimary text="Login" onPress={ onLogin }/>
                    <View style={styles.box}>
                        <Text style={stylesGlobal.text}>Ainda não tem uma conta?</Text>
                        <TouchableOpacity onPress={()=> setLogin(false)}>
                            <Text style={stylesGlobal.textBold}>
                                Cadastre-se aqui!
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Login;