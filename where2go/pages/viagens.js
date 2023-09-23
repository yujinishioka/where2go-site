import { Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

import ButtonMenu from "../components/buttonMenu";
import stylesGlobal from "../styles/global";
import styles from "../styles/viagens";

const Viagens = () => {
    const navigation = useNavigation();
    const navigateMenu = () => { navigation.navigate("Menu") };

    return(
        <View style={stylesGlobal.containerPage}>
            <View style={styles.container}>
                <ButtonMenu text="Viagens" action={ navigateMenu }/>
            </View>
        </View>
    )
}

export default Viagens;