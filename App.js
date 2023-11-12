import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import Menu from './pages/menu';
import Planejar from './pages/planejar';
import stylesGlobal from './styles/global';
import Viagens from './pages/viagens';
import Viagem from './pages/viagem';
import Perfil from './pages/perfil';
import EditarPerfil from './pages/editarPerfil';

const { Navigator, Group, Screen } = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(`isLoggedIn: ${isLoggedIn}`);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    Font.loadAsync({
      Montserrat: require('./styles/fonts/Montserrat/static/Montserrat-Regular.ttf'),
    });
  }, [])

  return (
    <NavigationContainer>
      <View style={stylesGlobal.container}>
        <Navigator initialRouteName={ isLoggedIn ? "Home" : "Login" } screenOptions={{ headerShown: false }}>
          <Group>
            <Screen name="Login">
              {(props) => <Login {...props} onLogin={ handleLogin }/>}
            </Screen>
            <Screen name="Register" component={ Register }/>
            <Screen name="Home" component={ Home }/>
            <Screen name="Menu">
              {(props) => <Menu {...props} onLogout={ handleLogout }/>}
            </Screen>
            <Screen name="Planejar" component={ Planejar }/>
            <Screen name="Viagens" component={ Viagens }/>
            <Screen name="Viagem" component={ Viagem }/>
            <Screen name="Perfil" component={ Perfil }/>
            <Screen name="EditarPerfil" component={ EditarPerfil }/>
          </Group>
        </Navigator>
        {/* <StatusBar style="auto" /> */}
      </View>
    </NavigationContainer>
  );
}

export default App;