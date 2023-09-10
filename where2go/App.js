import { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';

import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/home'
import Menu from './pages/menu'
import stylesGlobal from './styles/global'
import StackNavigator from './StackNavigator';

const { Navigator, Group, Screen } = createNativeStackNavigator ();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [login, setLogin] = useState(true);
  console.log(`\nisLoggedIn: ${isLoggedIn}\nlogin: ${login}`);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const IsLogged = () => {
    return (
      // <NavigationContainer>
      //   <StackNavigator />
      // </NavigationContainer>
      //
      // <NavigationContainer>
      //   <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      //     <Screen name="Home" component={ Home } onLogout={ handleLogout }/>
      //     <Screen name="Menu" component={ Menu } onLogout={ handleLogout }/>
      //   </Navigator>
      // </NavigationContainer>
      //
      <Home onLogout={ handleLogout }/>
    )
  }

  const NotLogged = (props) => {
    return (
      <View>
        { props.loginPage ?
          <Login onLogin={ handleLogin } setLogin={ setLogin }/>
          :
          <Register setLogin={ setLogin }/>
        }
      </View>
    )
  }

  return (
    <View style={stylesGlobal.container}>
      { isLoggedIn ? 
        <IsLogged/>
        :
        <NotLogged loginPage={ login }/>
      }
      <StatusBar style="auto" />
    </View>
  );
}

export default App;