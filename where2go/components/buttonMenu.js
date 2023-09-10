import { Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

import colors from '../styles/colors';
import styles from '../styles/buttons';

const ButtonMenu = (props) => {
  return(
    <View style={styles.menuBox}>
      <TouchableOpacity>
        <View style={styles.btnMenu}>
            <Entypo name="menu" size={40} color={colors.background} />
        </View>
      </TouchableOpacity>
      <Text style={styles.btnMenuText}>{props.text}</Text>
    </View>
  )
}

export default ButtonMenu;