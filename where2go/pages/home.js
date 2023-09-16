import { Text, View } from 'react-native';

import ButtonMenu from '../components/buttonMenu';

import styles from '../styles/home'
import NavBar from '../components/navBar';

const Home = ({ onLogout }) => {
    console.log('Home')
    return (
        <View>
            <ButtonMenu text="Home"/>
            <NavBar items={['Viagens', 'Eventos']}/>
            <Text style={{ color: 'white', fontSize: 20 }}>Teste</Text>
        </View>
    )
}

export default Home;