import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/home'
import styles from './css/global'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [login, setLogin] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const IsLogged = () => {
    return (
      <Home/>
    )
  }

  const NotLogged = (props) => {
    return (
      <View>
        { props.loginPage ?
          <Login onLogin={handleLogin} setLogin={setLogin}/>
          :
          <Register/>
        }
      </View>
    )
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>
        { isLoggedIn ? 
          <IsLogged/>
          :
          <NotLogged loginPage={ login }/>
        }
        {/* <StatusBar style="auto" /> */}
      </View>
    </NavigationContainer>
  );
}

export default App;