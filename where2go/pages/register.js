import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Register = ({ onLogout, setLogin }) => {
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
        <View style={{ flex:1 }}>
            <Text>Registro</Text>
            <View>
                <View>Image</View>
                <View>
                    <TextInput placeholder={"Username"} value={username} onChangeText={setUsername}/>
                    <TextInput placeholder={"Nome"} value={name} onChangeText={setName}/>
                    <TextInput placeholder={"E-mail"} value={email} onChangeText={setEmail}/>
                    <TextInput placeholder={"CPF"} value={cpf} onChangeText={setCpf}/>
                    <TextInput placeholder={"Telefone"} value={cellphone} onChangeText={setCellphone}/>
                    <TextInput placeholder={"Senha"} value={password} onChangeText={setPassword}/>
                    <TextInput placeholder={"Confirmar senha"} value={confirmPassword} onChangeText={setConfirmPassword}/>
                </View>
                <View>
                    <TouchableOpacity onPress={() => registrar()}>
                        <Text>Registrar</Text>
                    </TouchableOpacity>
                    <Text>Já possui cadastro?</Text>
                    <TouchableOpacity onPress={()=> setLogin(true)}>
                        <Text>
                            Faça o Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Register;