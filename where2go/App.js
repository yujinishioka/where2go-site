import { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import Menu from './pages/menu';
import Planejar from './pages/planejar';
import stylesGlobal from './styles/global';
import Viagens from './pages/viagens';

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
          </Group>
        </Navigator>
        {/* <StatusBar style="auto" /> */}
      </View>
    </NavigationContainer>
  );
}

export default App;