import { ActivityIndicator, Animated, Easing, Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ButtonMenu from '../components/buttonMenu';

import stylesGlobal from '../styles/global';
import styles from '../styles/perfil';

import img from '../assets/profile.png';

import api from "../api";

const Perfil = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const fadeAnim = new Animated.Value(1);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        AsyncStorage.getItem("userToken").then((token) => {
            setLoading(true);
            api.get('/user', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((resp) => {
                setUser(resp.data);
            }).catch((err) => {
                console.log(`Erro: ${err}`);
                alert('Erro para encontrar viagens.');
            }).finally(() => {
                setLoading(false); // Certifique-se de definir o estado como falso, mesmo em caso de erro
            });
        })
    };

    useEffect(() => {
        if (loading) {
            // Simulando uma tarefa de carregamento demorada
            const animation = Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 300,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: true,
            });

            Animated.loop(animation).start();
        }
    }, [loading, fadeAnim]);

    const User = () => {
        return (
            <View style={styles.box}>
                <Text style={styles.title}>{user.name}</Text>
                <View style={styles.line}>
                    <Text style={styles.textBoldKey}>Nickname:</Text>
                    <Text style={styles.textValue}>{user.nickname}</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.textBoldKey}>Email:</Text>
                    <Text style={styles.textValue}>{user.email}</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.textBoldKey}>CellPhone:</Text>
                    <Text style={styles.textValue}>{user.cellphone}</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.textBoldKey}>CPF:</Text>
                    <Text style={styles.textValue}>{user.cpf}</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.textBoldKey}>Description:</Text>
                    <Text style={styles.textValue}>{user.description}</Text>
                </View>
            </View>
        )
    }

    const navigation = useNavigation();

    const navigateMenu = () => { navigation.navigate("Menu") }

    return (
        <View style={stylesGlobal.containerPage}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <ButtonMenu text="Perfil" action={navigateMenu} />
                    <Image style={{ width: 80, height: 80 }} source={img} />
                </View>
                {loading ?
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" />
                        <Text style={styles.text}>Loading...</Text>
                    </View>
                    :
                    <View>
                        <User />
                    </View>
                }
            </View>
        </View>
    )
}

export default Perfil;