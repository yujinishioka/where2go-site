import { Text, TouchableOpacity, View } from 'react-native';

const Home = ({ onLogout }) => {
    console.log('MENU')
    return (
        <View>
            <Text>MENU</Text>
            <TouchableOpacity onPress={()=> onLogout()}>
                <Text>
                    Perfil
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;