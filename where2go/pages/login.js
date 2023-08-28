import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import logo from '../assets/img/logo-full-travel.png'
import styles from '../css/login'

const Login = ({ onLogin, setLogin }) => {
    return (
        <View style={{ flex:1 }}>
            <View>
                <Image style={{ width: 220, height: 220}} source={ logo }/>
            </View>
            <View>
                <Text>Login</Text>
                <View>
                    <TextInput placeholder={"E-mail"}/>
                    <TextInput placeholder={"Senha"}/>
                </View>
                <TouchableOpacity>
                    <Text>
                        Login
                    </Text>
                </TouchableOpacity>
                <Text>Não possui login?</Text>
                <TouchableOpacity onPress={()=> setLogin(false)}>
                    <Text>
                        Registre-se aqui!
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login;