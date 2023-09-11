import { Text, TouchableOpacity, View } from 'react-native';

const Menu = ({ onLogout }) => {
    console.log('MENU')
    return (
        <View>
            <Text style={{color: 'white'}}>MENU</Text>
            <TouchableOpacity onPress={()=> onLogout()}>
                <Text style={{color: 'white'}}>
                    Sair
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Menu;