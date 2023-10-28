import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';

import stylesGlobal from '../styles/global';
import styles from '../styles/menu';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Menu = ({ onLogout }) => {
    const navigation = useNavigation();

    return (
        <View style={stylesGlobal.containerPage}>
            <View style={styles.container}>
                <TouchableOpacity onPress={()=> navigation.navigate("Perfil")}>
                    <Text style={styles.textMenu}>
                        Perfil
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
                    <Text style={styles.textMenu}>
                        Home
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate("Planejar")}>
                    <Text style={styles.textMenu}>
                        Planejar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate("Viagens")}>
                    <Text style={styles.textMenu}>
                        Viagens
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {
                    AsyncStorage.removeItem('userToken');
                    navigation.navigate("Login");
                }}>
                    <Text style={styles.textMenu}>
                        Sair
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Menu;