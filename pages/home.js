import { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ButtonMenu from '../components/buttonMenu';

import stylesGlobal from '../styles/global';
import styles from '../styles/home';
import NavBar from '../components/navBar';

import img from '../assets/profile.png';

import api from "../api";

const Home = () => {
    const [viagens, setViagens] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        AsyncStorage.getItem("userToken").then((token) => {
            api.get('/trip/all', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((resp) => {
                setViagens(resp.data);
            }).catch((err) => {
                console.log(`Erro: ${err}`);
                alert('Erro para encontrar viagens.');
            })
        })
    }, [])

    const navigateMenu = () => { navigation.navigate("Menu") }

    const ViagensList = ({ id, destino, pais, dataInicio, dataFim }) => {
        const navigateViagem = () => { navigation.navigate("Viagem", {id: id} )}

        return(
            <TouchableOpacity onPress={navigateViagem}>
                <View style={styles.box}>
                    <Text style={styles.title}>{destino} - {pais}</Text>
                    { dataInicio && dataFim ? 
                        <View>
                            <Text style={styles.date}>{dataInicio} à {dataFim}</Text>
                        </View>
                        :
                        <View>
                            <Text style={styles.date}>Data: provisório</Text>
                        </View>
                    }
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={stylesGlobal.containerPage}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <ButtonMenu text="Home" action={navigateMenu} />
                    <Image style={{ width: 80, height: 80 }} source={img} />
                </View>
                <Text style={styles.textTitle}>Viagens Geradas</Text>
                <FlatList
                    data={viagens}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <ViagensList {...item}/>}
                />
                <NavBar items={['Viagens', 'Eventos']}/>
            </View>
        </View>
    )
}

export default Home;