import { Text, TouchableOpacity, View } from 'react-native'

import styles from '../styles/buttons'

const MenuButton = (props) => {
  return(
    <View style={styles.btnMenu}>
      <TouchableOpacity>
        <View>
          <Text style={styles.btnMenuText}>Image</Text>
        </View>
        <Text style={styles.btnMenuText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MenuButton;