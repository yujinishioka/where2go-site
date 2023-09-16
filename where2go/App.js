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

const { Navigator, Screen } = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [login, setLogin] = useState(true);
  console.log(`isLoggedIn: ${isLoggedIn} | login: ${login}`);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const IsLogged = () => {
    return (
      // <NavigationContainer>
      //   <Navigator initialRouteName="Home">
      //     <Screen name="Home">
      //       {(props) => <Home {...props} onLogout={ handleLogout }/>}
      //     </Screen>
      //     <Screen name="Menu">
      //       {(props) => <Menu {...props} onLogout={ handleLogout }/>}
      //     </Screen>
      //     <Screen name="Planejar">
      //       {(props) => <Planejar {...props}/>}
      //     </Screen>
      //   </Navigator>
      // </NavigationContainer>
      <Home />
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