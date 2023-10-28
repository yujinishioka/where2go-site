import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ButtonMenu from '../components/buttonMenu';

import stylesGlobal from '../styles/global';
import styles from '../styles/home';
import NavBar from '../components/navBar';

const Perfil = () => {
    const navigation = useNavigation();

    const navigateMenu = () => { navigation.navigate("Menu") }
    
    return (
        <View style={stylesGlobal.containerPage}>
            <View style={styles.container}>
                <ButtonMenu text="Perfil" action={ navigateMenu }/>
                <Text>Perfil</Text>
            </View>
        </View>
    )
}

export default Perfil;