import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

import ButtonPrimary from "../components/buttonPrimary";
import stylesGlobal from "../styles/global";
import styles from "../styles/editarPerfil";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../api";

const EditarPerfil = ({ id }) => {
    const [user, setUser] = useState({});
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [cellphone, setCellphone] = useState("");
    const [cpf, setCpf] = useState("");

    const navigation = useNavigation();

    useEffect(() => {
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
                alert('Erro para encontrar usuario.');
            })
        })
    };

    const updateDados = async () => {
        const newInfo = {
            id: user.id,
            nickname,
            email,
            cellphone,
            cpf
        }

        api.put('/user', newInfo, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(() => {
            alert(`Informações atualizadas com sucesso!`);
        }).catch((err) => {
            console.log(`Erro: ${err}`);
            alert('Erro ao atualizar informações.');
        })
    }

    const voltarPagina = () => {
        navigation.navigate("Perfil");
    }

    return(
        <View style={stylesGlobal.containerPage}>
            <View style={styles.box}>
                <View style={styles.line}>
                    <Text style={styles.textBoldKey}>id: {id}</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.textBoldKey}>Nickname: </Text>
                    <TextInput
                        value={nickname}
                        onChangeText={setNickname}
                        style={styles.textValue} 
                    />
                </View>
                <View style={styles.line}>
                    <Text style={styles.textBoldKey}>Email: </Text>
                    <TextInput 
                        value={email}
                        onChangeText={setEmail}
                        style={styles.textValue}
                    />
                </View>
                <View style={styles.line}>
                    <Text style={styles.textBoldKey}>Cellphone: </Text>
                    <TextInput 
                        value={cellphone}
                        onChangeText={setCellphone}
                        style={styles.textValue}
                    />
                </View>
                <View style={styles.line}>
                    <Text style={styles.textBoldKey}>CPF: </Text>
                    <TextInput 
                        value={cpf}
                        onChangeText={setCpf}
                        style={styles.textValue}
                    />
                </View>
                <ButtonPrimary text="Salvar" onPress={ updateDados }/>
                <ButtonPrimary text="Cancelar" onPress={ voltarPagina }/>
            </View>
        </View>
    )
}

export default EditarPerfil;