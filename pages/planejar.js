import React, { useState } from 'react';
import { FlatList, Modal, Switch, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';

import api from '../api';
import ButtonMenu from '../components/buttonMenu';
import ButtonPrimary from '../components/buttonPrimary';
import Calendario from '../components/calendario';
import colors from '../styles/colors';
import stylesGlobal from '../styles/global';
import styles from '../styles/planejar';

const Planejar = () => {
    const [id, setId] = useState({});
    const [partida, setPartida] = useState('');
    const [destino, setDestino] = useState('');
    const [precoMin, setPrecoMin] = useState('');
    const [precoMax, setPrecoMax] = useState('');
    const [showCalendarStart, setShowCalendarStart] = useState(false);
    const [dateStart, setDateStart] = useState(new Date());
    const [showCalendarEnd, setShowCalendarEnd] = useState(false);
    const [dateEnd, setDateEnd] = useState(new Date());
    const [crianca, setCrianca] = useState(false);
    const [open, setOpen] = useState(false);
    const [clima, setClima] = useState('quente');
    const [loading, setLoading] = useState(false);

    const [climas, setClimas] = useState([
        { label: 'Quente', value: 'quente' },
        { label: 'Frio', value: 'frio' },
    ]);

    const navigation = useNavigation();

    const navigateMenu = () => {
        navigation.navigate("Menu");
    };

    const handleShowCalendarStart = () => {
        setShowCalendarStart(!showCalendarStart);
    }

    const handleShowCalendarEnd = () => {
        setShowCalendarEnd(!showCalendarEnd);
    }

    const handleDateStartSelect = (date) => {
        setDateStart(date);
        setShowCalendarStart(false);
    }

    const handleDateEndSelect = (date) => {
        setDateEnd(date);
        setShowCalendarEnd(false);
    }

    const preencherFormulario = () => {
        console.log(`Formulário preenchido`);
    };

    const resetarFormulario = () => {
        console.log(`Formulário resetado`);
    };

    const handlePlanejamento = () => {
        console.log('Planejamento');
        AsyncStorage.getItem("userToken").then((token) => {
            setLoading(true);
            api.post('/trip', {
                "clima": clima,
                "custoMaximo" : precoMax,
                "destino": destino,
                "tempoMaximo": 7,
                "transporte": "avião",
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((resp) => {
                setId(resp.data.id);
                setLoading(false);
                console('Viagem criada com sucesso!');
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
                        <ButtonPrimary text="Partida" onPress={handleShowCalendarStart}  />
                    </View>
                    <View style={stylesGlobal.formHalfRight}>
                        <ButtonPrimary text="Destino" onPress={handleShowCalendarEnd} />
                    </View>
                    <View style={stylesGlobal.formHalfLeft}>
                        <Text style={stylesGlobal.text}>Partida:</Text>
                        {showCalendarStart && <Calendario/>}
                    </View>
                    <View style={stylesGlobal.formHalfRight}>
                        <Text style={stylesGlobal.text}>Destino:</Text>
                        {showCalendarEnd && <Calendario/>}
                    </View>
                    {/* <View style={stylesGlobal.formHalfLeft}>
                        <Text style={stylesGlobal.text}>Início</Text>
                        <TextInput
                            placeholder={"DD/MM/YYYY"}
                            value={dataInicio}
                            onChangeText={setDataInicio}
                            placeholderTextColor={colors.lightGray}
                            style={stylesGlobal.textInput}
                        />
                    </View>
                    <View style={stylesGlobal.formHalfRight}>
                        <Text style={stylesGlobal.text}>Fim</Text>
                        <TextInput
                            placeholder={"DD/MM/YYYY"}
                            value={dataFim}
                            onChangeText={setDataFim}
                            placeholderTextColor={colors.lightGray}
                            style={stylesGlobal.textInput}
                        />
                    </View> */}
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