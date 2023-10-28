import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from '@react-navigation/native';

import api from "../api";
import ButtonMenu from "../components/buttonMenu";
import Divider from "../components/divider";
import stylesGlobal from "../styles/global";
import styles from "../styles/viagem";

const Viagem = () => {
    const [loading, setLoading] = useState(false);
    const [viagem, setViagem] = useState({
        destino: "",
        pais: "",
        atividadesPorDia: [{
            dia: "",
            atividades: [{
                nome: "",
                duracao: "",
            }]
        }],
        hospedagem: "",
        duracaoViagem: "",
        custo: "",
        dataInicio: "",
        dataFim: ""
    });
    const navigation = useNavigation();
    const route = useRoute();
    const { id } = route.params;

    useEffect(() => {
        AsyncStorage.getItem("userToken").then((token) => {
            api.get(`/trip/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((resp) => {
                setViagem(resp.data);
            }).catch((err) => {
                console.log(`Erro: ${err}`);
                alert('Erro na busca da Viagem.');
            })
        })
    }, [])

    const navigateMenu = () => { navigation.navigate("Menu") };

    const AtividadesList = ({ atividades }) => {
        return (
            <View>
                {atividades.map((atividade, index) => (
                    <View key={index} style={styles.boxAtividade}>
                        <Text style={styles.text}><Text style={styles.textBold}>Atividade:</Text> {atividade.nome}</Text>
                        <Text style={styles.text}><Text style={styles.textBold}>Duração:</Text> {atividade.duracao}</Text>
                    </View>
                ))}
            </View>
        );
    }

    return(
        <View style={stylesGlobal.containerPage}>
            <View style={styles.container}>
                <ButtonMenu text="Viagens" action={ navigateMenu }/>
                <View style={styles.box}>
                    <FlatList
                        data={viagem.atividadesPorDia}
                        keyExtractor={(item) => item.dia.toString()}
                        ListHeaderComponent={() => (
                            <View>
                                <Text style={styles.title}>{viagem.destino} - {viagem.pais}</Text>
                                <Text style={styles.text}><Text style={styles.textBold}>Data:</Text> 21/12/2023</Text>
                                <Text style={styles.text}><Text style={styles.textBold}>Hospedagem:</Text> {viagem.hospedagem}</Text>
                                <Text style={styles.text}><Text style={styles.textBold}>Custo Previsto:</Text> R$ {viagem.custo}.00</Text>
                                <Divider />
                                <Text style={styles.textAtividades}>ATIVIDADES:</Text>
                                <Divider />
                            </View>
                        )}
                        renderItem={({ item }) => (
                            <AtividadesList { ...item }/>
                        )}
                    />
                </View>
            </View>
        </View>
    )
}

export default Viagem;