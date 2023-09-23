import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ButtonMenu from '../components/buttonMenu';

import stylesGlobal from '../styles/global';
import styles from '../styles/home';
import NavBar from '../components/navBar';

const Home = () => {
    const navigation = useNavigation();

    const navigateMenu = () => { navigation.navigate("Menu") }
    
    return (
        <View style={stylesGlobal.containerPage}>
            <View style={styles.container}>
                <ButtonMenu text="Home" action={ navigateMenu }/>
                <NavBar items={['Viagens', 'Eventos']}/>
            </View>
        </View>
    )
}

export default Home;