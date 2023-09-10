import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/navBar";

const NavBar = (props) => {
    const items = props.items;
    console.log('items', items)

    return(
        <View style={styles.navBar}>
            {items.map((item) => {
                <View>
                    <TouchableOpacity>
                        <Text style={styles.text}>{item}</Text>
                    </TouchableOpacity>
                </View>
            })}
        </View>
    )
}

export default NavBar;