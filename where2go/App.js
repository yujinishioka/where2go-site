import React, { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';

import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import Menu from './pages/menu';
import stylesGlobal from './styles/global';

const { Navigator, Screen } = createNativeStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(`\nApp:\nisLoggedIn: ${isLoggedIn}`);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <View style={stylesGlobal.container}>
      <NavigationContainer>
        <Navigator initialRouteName={ isLoggedIn ? "Home" : "Login" } screenOptions={{ headerShown: false }}>
          <Screen name="Home">
            {(props) => (
              <Home {...props} onLogout={handleLogout} />
            )}
          </Screen>
          <Screen name="Menu">
            {(props) => (
              <Menu {...props} onLogout={handleLogout} />
            )}
          </Screen>
          <Screen name="Login">
            {(props) => (
              <Login {...props} onLogin={handleLogin} navigation={props.navigation} />
            )}
          </Screen>
          <Screen name="Register">
            {(props) => (
              <Register {...props} navigation={props.navigation} />
            )}
          </Screen>
        </Navigator>
        {/* <StatusBar style="auto" /> */}
      </NavigationContainer>
    </View>
  );
}

export default App;
