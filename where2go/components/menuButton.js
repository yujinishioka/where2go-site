import { Text, View } from 'react-native'

const MenuButton = (props) => {
  return(
    <View>
      <View>Image</View>
      <Text>{props.text}</Text>
    </View>
  )
}

export default MenuButton;