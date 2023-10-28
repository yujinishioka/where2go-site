import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';

import api from "../api";
import ButtonMenu from "../components/buttonMenu";
import stylesGlobal from "../styles/global";
import styles from "../styles/viagens";
import { FlatList } from "react-native-gesture-handler";

const Viagens = () => {
    const [viagens, setViagens] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        AsyncStorage.getItem("userToken").then((token) => {
            api.get('/trip', {
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

    const navigateMenu = () => { navigation.navigate("Menu") };

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

    return(
        <View style={stylesGlobal.containerPage}>
            <View style={styles.container}>
                <ButtonMenu text="Viagens" action={ navigateMenu }/>
                <FlatList
                    data={viagens}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <ViagensList {...item}/>}
                />
            </View>
        </View>
    )
}

export default Viagens;