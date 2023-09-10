import { View } from 'react-native';

import ButtonMenu from '../components/buttonMenu';

import styles from '../styles/home'
import NavBar from '../components/navBar';

const Home = ({ onLogout }) => {
    console.log('Home')
    return (
        <View>
            <ButtonMenu text="Home"/>
            <NavBar items={['Viagens', 'Eventos']}/>
        </View>
    )
}

export default Home;