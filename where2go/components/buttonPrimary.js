import { Text, TouchableOpacity, View } from 'react-native'

import styles from '../styles/buttons'

const ButtonPrimary = (props) => {
  return(
    <View style={ styles.btnPrimary }>
      <TouchableOpacity onPress={ props.onPress }>
        <Text style={styles.btnText}>{ props.text }</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonPrimary;