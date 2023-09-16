import { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';

import ButtonMenu from '../components/buttonMenu';

import colors from '../styles/colors';
import stylesGlobal from '../styles/global';
import styles from '../styles/planejar';
import ButtonPrimary from '../components/buttonPrimary';

const Planejar = () => {
    const [partida, setPartida] = useState();
    const [destino, setDestino] = useState();
    const [precoMin, setPrecoMin] = useState();
    const [precoMax, setPrecoMax] = useState();
    const [dataInicio, setDataInicio] = useState();
    const [dataFim, setDataFim] = useState();
    const [crianca, setCrianca] = useState(false);
    console.log('Planejar');

    const preencherFormulario = () => {
        console.log(`Formulario preenchido`);
    }

    const resetarFormulario = () => {
        console.log(`Formulario resetado`);
    };

    const handlePlanejamento = () => {
        console.log(`Planejamento Efetuado.`);
    }

    return (
        <View style={styles.container}>
            <ButtonMenu text="Planejar"/>
            <ScrollView style={stylesGlobal.form}>
                <View style={{ marginBottom: 10 }}>
                    <ButtonPrimary text="Preencher Automaticamente" onPress={ preencherFormulario }/>
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
                        <Text style={stylesGlobal.textBold}>Data</Text>
                    </View>
                    <View style={stylesGlobal.formHalfLeft}>
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
                    </View>
                </View>
                <View style={{ marginTop: 20, marginBottom: 60 }}>
                    <ButtonPrimary text="Planejar" onPress={ handlePlanejamento }/>
                    <ButtonPrimary text="Apagar Formulario" onPress={ resetarFormulario }/>
                </View>
            </ScrollView>
        </View>
    )
}

export default Planejar;