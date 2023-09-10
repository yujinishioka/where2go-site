import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import logo from '../assets/img/logo.png';
import colors from '../styles/colors';
import stylesGlobal from '../styles/global';
import styles from '../styles/register';
import ButtonPrimary from '../components/buttonPrimary';

const Register = ({ setLogin }) => {
    const [username, setUsername] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [cpf, setCpf] = useState();
    const [cellphone, setCellphone] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const registrar = () => {
        const cadastro = {username, name, email, cpf, cellphone, password, confirmPassword};
        console.log('Cadastro', cadastro);
    }

    return (
        <View>
            <Text style={ styles.title }>Registro</Text>
            <View style={ stylesGlobal.form }>
                <View>
                    <Image style={{ width: 220, height: 80}} source={ logo }/>
                </View>
                <View style={{marginBottom: 10}}>
                    <TextInput 
                        placeholder={"Username"} 
                        value={username} 
                        onChangeText={setUsername} 
                        placeholderTextColor={colors.lightGray} 
                        style={stylesGlobal.textInput}
                    />
                    <TextInput 
                        placeholder={"Nome"} 
                        value={name} onChangeText={setName} 
                        placeholderTextColor={colors.lightGray} 
                        style={stylesGlobal.textInput}
                    />
                    <TextInput 
                        placeholder={"E-mail"} 
                        value={email} onChangeText={setEmail} 
                        placeholderTextColor={colors.lightGray} 
                        style={stylesGlobal.textInput}
                    />
                    <TextInput 
                        placeholder={"CPF"} 
                        value={cpf} 
                        onChangeText={setCpf} 
                        placeholderTextColor={colors.lightGray} 
                        style={stylesGlobal.textInput}
                    />
                    <TextInput 
                        placeholder={"Telefone"} 
                        value={cellphone} 
                        onChangeText={setCellphone} 
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
                    <TextInput 
                        placeholder={"Confirmar senha"} 
                        value={confirmPassword} 
                        onChangeText={setConfirmPassword} 
                        placeholderTextColor={colors.lightGray} 
                        style={stylesGlobal.textInput}
                    />
                </View>
                <ButtonPrimary text="Registrar" onPress={registrar}/>
                <View style={styles.box}>
                    <Text style={stylesGlobal.text}>Já possui cadastro?</Text>
                    <TouchableOpacity onPress={()=> setLogin(true)}>
                        <Text style={stylesGlobal.textBold}>
                            Faça o Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Register;