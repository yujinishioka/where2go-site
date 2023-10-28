import { Image, Text, View } from 'react-native';
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

    useEffect(() => {
        const getUsers = async () => {
            try {
                const usersString = await AsyncStorage.getItem('users');
                if (usersString !== null) {
                    setUsers(JSON.parse(usersString));
                }
            } catch (error) {
                console.error(error);
            }
        };
        getUser();
    }, []);

    const getUser = async () => {
        AsyncStorage.getItem("userToken").then((token) => {
            api.get('/user', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((resp) => {
                setUser(resp.data);
            }).catch((err) => {
                console.log(`Erro: ${err}`);
                alert('Erro para encontrar viagens.');
            })
        })
    };

    const User = () => {
        return (
            <View style={styles.box}>
                <Text style={styles.title}>{user.name}</Text>
                <View style={styles.line}>
                    <Text style={styles.textBold}>Nickname:</Text>
                    <Text style={styles.text}>{user.nickname}</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.textBold}>Email:</Text>
                    <Text style={styles.text}>{user.email}</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.textBold}>CellPhone:</Text>
                    <Text style={styles.text}>{user.cellphone}</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.textBold}>CPF:</Text>
                    <Text style={styles.text}>{user.cpf}</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.textBold}>Description:</Text>
                    <Text style={styles.text}>{user.description}</Text>
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
                    <Text>Perfil</Text>
                    <Image style={{ width: 80, height: 80 }} source={img} />
                </View>
                <User />
            </View>
        </View>
    )
}

export default Perfil;