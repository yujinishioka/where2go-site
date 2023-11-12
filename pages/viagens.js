import { useEffect, useState } from "react";
import { ActivityIndicator, Animated, Easing, Text, TouchableOpacity, FlatList, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';

import api from "../api";
import ButtonMenu from "../components/buttonMenu";
import stylesGlobal from "../styles/global";
import styles from "../styles/viagens";

const Viagens = () => {
    const [viagens, setViagens] = useState([]);
    const [loading, setLoading] = useState(false);
    const fadeAnim = new Animated.Value(1);
    const navigation = useNavigation();

    useEffect(() => {
        AsyncStorage.getItem("userToken").then((token) => {
            setLoading(true);
            api.get('/trip', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((resp) => {
                setViagens(resp.data);
            }).catch((err) => {
                console.log(`Erro: ${err}`);
                alert('Erro para encontrar viagens.');
            }).finally(() => {
                setLoading(false);
            });
        })
    }, [])


    useEffect(() => {
        if (loading) {
            const animation = Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 300,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: true,
            });

            Animated.loop(animation).start();
        }
    }, [loading, fadeAnim]);

    const navigateMenu = () => { navigation.navigate("Menu") };

    const atualizarViagens = async () => {
        try {
            const token = await AsyncStorage.getItem("userToken");
            const response = await api.get('/trip', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setViagens(response.data);
        } catch (error) {
            console.error(`Erro ao atualizar lista de viagens: ${error}`);
            alert("Erro ao atualizar lista de viagens");
        }
    };

    const deletarViagem = async (id) => {
        try {
            const token = await AsyncStorage.getItem("userToken");
            await api.delete(`/trip/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            alert("Viagem deletada com sucesso");
            atualizarViagens();
        } catch (error) {
            console.error(`Erro ao deletar viagem: ${error}`);
            alert("Erro ao deletar viagem");
        }
    };

    const ViagensList = ({ id, destino, pais, dataInicio, dataFim }) => {
        const navigateViagem = () => { navigation.navigate("Viagem", { id: id }) }

        return (
            <View>
                <TouchableOpacity onPress={navigateViagem}>
                    <View style={styles.box}>
                        <Text style={styles.title}>{destino} - {pais}</Text>
                        {dataInicio && dataFim ?
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
                <View style={styles.boxMenu}>
                    <TouchableOpacity onPress={deletarViagem(id)}>
                        <Text style={styles.touchable}>Deletar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={stylesGlobal.containerPage}>
            <View style={styles.container}>
                <ButtonMenu text="Viagens" action={navigateMenu} />
                {loading ?
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" />
                        <Text style={styles.text}>Loading...</Text>
                    </View>
                    :
                    <View>
                        <FlatList
                            data={viagens}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => <ViagensList {...item} />}
                        />
                    </View>
                }
            </View>
        </View>
    )
}

export default Viagens;