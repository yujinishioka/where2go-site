import { Text, TouchableOpacity, View } from 'react-native';

import MenuButton from '../components/menuButton';

const Home = ({ onLogout }) => {
    console.log('Home')
    return (
        <View>
            <MenuButton text="Home"/>
            <Text>HOME</Text>
            <TouchableOpacity onPress={()=> onLogout()}>
                <Text>
                    Sair
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;