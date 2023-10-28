import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 20,
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    box: {
        marginTop: 20,
        padding: 16,
        backgroundColor: colors.darkGray,
        borderColor: colors.lightGray,
        borderWidth: 2,
        borderRadius: 20,
    },
    line: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    title: {
        color: colors.lightGray,
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 4,
    },
    text: {
        color: "#FFF",
        fontSize: 18,
        marginVertical: 1,
        fontFamily: 'Montserrat'
    },
    textBold: {
        fontWeight: '700',
        fontSize: 18,
        color: "#FFF"
    }
});

export default styles;