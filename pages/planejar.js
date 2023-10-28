import React, { useState } from 'react';
import { FlatList, Switch, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';

import api from '../api';
import ButtonMenu from '../components/buttonMenu';
import ButtonPrimary from '../components/buttonPrimary';
import colors from '../styles/colors';
import stylesGlobal from '../styles/global';
import styles from '../styles/planejar';

const Planejar = () => {
    const [id, setId] = useState({});
    const [partida, setPartida] = useState('');
    const [destino, setDestino] = useState('');
    const [precoMin, setPrecoMin] = useState('');
    const [precoMax, setPrecoMax] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const [crianca, setCrianca] = useState(false);
    const [open, setOpen] = useState(false);
    const [clima, setClima] = useState('');
    const [loading, setLoading] = useState(false);

    const [climas, setClimas] = useState([
        { label: 'Quente', value: 'quente' },
        { label: 'Frio', value: 'frio' },
    ]);

    const navigation = useNavigation();

    const navigateMenu = () => {
        navigation.navigate("Menu");
    };

    const preencherFormulario = () => {
        console.log(`Formulário preenchido`);
    };

    const resetarFormulario = () => {
        setPartida('');
        setDestino('');
        setPrecoMin('');
        setPrecoMax('');
        setDateStart('');
        setDateEnd('');
        setCrianca(false);
        setClima('');
    };

    const calcularDias = (inicio, fim) => {
        const [dia1, mes1, ano1] = inicio.split('-').map(Number);
        const [dia2, mes2, ano2] = fim.split('-').map(Number);

        const data1 = new Date(ano1, mes1 - 1, dia1);
        const data2 = new Date(ano2, mes2 - 1, dia2);

        const diferencaMilissegundos = Math.abs(data2 - data1);
        const diferencaDias = diferencaMilissegundos / (1000 * 60 * 60 * 24);

        return diferencaDias;
    }

    const transformarData = (data) => {
        const partes = data.split('-');
        if(partes.length === 3) {
            const dia = partes[0];
            const mes = partes[1];
            const ano = partes[2];
            return `${ano}-${mes}-${dia}`
        } else {
            return data;
        }
    }

    const handlePlanejamento = () => {
        console.log('Planejamento');
        AsyncStorage.getItem("userToken").then((token) => {
            setLoading(true);
            api.post('/trip', {
                "clima": clima,
                "custoMaximo": precoMax,
                "dataInicio": transformarData(dateStart),
                "dataFim": transformarData(dateEnd),
                "destino": destino,
                "tempoMaximo": calcularDias(dateStart, dateEnd),
                "transporte": "avião",
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((resp) => {
                setId(resp.data.id);
                setLoading(false);
                console.log('Viagem criada com sucesso!');
                alert('Viagem criada com sucesso!');
                // navigation.navigate("Viagem", {id: id} );
            }).catch((err) => {
                setLoading(false);
                console.log(`Erro no Post: ${err}`);
                alert('Falha ao planejar viagem.');
            })
        })
    };

    const DropDownClima = () => {
        return (
            <View style={{ width: '100%' }}>
                <DropDownPicker
                    open={open}
                    value={clima}
                    items={climas}
                    setOpen={setOpen}
                    setValue={setClima}
                    setItems={setClimas}
                    theme="DARK"
                    multiple={false}
                />
            </View>
        );
    };

    const renderForms = ({ item }) => {
        return (
            <View style={stylesGlobal.form}>
                <View style={{ marginBottom: 10 }}>
                    <ButtonPrimary text="Preencher Automaticamente" onPress={preencherFormulario} />
                    <View style={{ marginBottom: 6 }}>
                        <Text style={stylesGlobal.textExplain}>Preenche o formulário com base em IA.</Text>
                    </View>
                </View>
                <View style={stylesGlobal.flexRow}>
                    <View style={stylesGlobal.formFull}>
                        <Text style={stylesGlobal.textBold}>Local</Text>
                    </View>
                    <View style={stylesGlobal.formFull}>
                        <Text style={stylesGlobal.text}>Partida</Text>
                        <TextInput
                            placeholder={"Meu Local"}
                            value={partida}
                            onChangeText={setPartida}
                            placeholderTextColor={colors.lightGray}
                            style={stylesGlobal.textInput}
                        />
                    </View>
                    <View style={stylesGlobal.formFull}>
                        <Text style={stylesGlobal.text}>Destino</Text>
                        <TextInput
                            placeholder={"Destino"}
                            value={destino}
                            onChangeText={setDestino}
                            placeholderTextColor={colors.lightGray}
                            style={stylesGlobal.textInput}
                        />
                    </View>
                    <View style={stylesGlobal.formFull}>
                        <Text style={stylesGlobal.textBold}>Valor</Text>
                    </View>
                    <View style={stylesGlobal.formHalfLeft}>
                        <Text style={stylesGlobal.text}>Mínimo</Text>
                        <TextInput
                            placeholder={"R$"}
                            value={precoMin}
                            onChangeText={setPrecoMin}
                            placeholderTextColor={colors.lightGray}
                            style={stylesGlobal.textInput}
                        />
                    </View>
                    <View style={stylesGlobal.formHalfRight}>
                        <Text style={stylesGlobal.text}>Máximo</Text>
                        <TextInput
                            placeholder={"R$"}
                            value={precoMax}
                            onChangeText={setPrecoMax}
                            placeholderTextColor={colors.lightGray}
                            style={stylesGlobal.textInput}
                        />
                    </View>
                    <View style={stylesGlobal.formFull}>
                        <Text style={stylesGlobal.textBold}>Data da Viagem</Text>
                    </View>
                    <View style={stylesGlobal.formHalfLeft}>
                        <Text style={stylesGlobal.text}>Início</Text>
                        <TextInput
                            placeholder={"DD-MM-YYYY"}
                            value={dateStart}
                            onChangeText={setDateStart}
                            placeholderTextColor={colors.lightGray}
                            style={stylesGlobal.textInput}
                        />
                    </View>
                    <View style={stylesGlobal.formHalfRight}>
                        <Text style={stylesGlobal.text}>Fim</Text>
                        <TextInput
                            placeholder={"DD-MM-YYYY"}
                            value={dateEnd}
                            onChangeText={setDateEnd}
                            placeholderTextColor={colors.lightGray}
                            style={stylesGlobal.textInput}
                        />
                    </View>
                    <View style={stylesGlobal.formHalfLeftSwitch}>
                        <Text style={stylesGlobal.text}>Criança</Text>
                        <Switch
                            value={crianca}
                            onValueChange={setCrianca}
                            trackColor={{false: colors.lightGray, true: colors.primary}}
                            ios_backgroundColor={colors.primary}
                        />
                    </View>
                    <View style={stylesGlobal.formFull}>
                        <Text style={stylesGlobal.textBold}>Clima</Text>
                    </View>
                    <DropDownClima />
                </View>
                <View style={{ marginTop: 20, marginBottom: 16 }}>
                    <ButtonPrimary text="Planejar" onPress={handlePlanejamento} />
                    <ButtonPrimary text="Apagar Formulário" onPress={resetarFormulario} />
                </View>
            </View>
        );
    };

    return (
        <View style={stylesGlobal.containerPage}>
            <View style={styles.container}>
                { loading ? 
                    <View>
                        <Text>Loading...</Text>
                    </View>
                    : 
                    <View>
                        <ButtonMenu text="Planejar" action={navigateMenu} />
                        <FlatList
                            data={[{key: '1'}]}
                            renderItem={renderForms}
                            style={styles.flatList}
                        />
                    </View>
                }
            </View>
        </View>
    );
};

export default Planejar;