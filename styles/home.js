import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
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

    title: {
        color: colors.lightGray,
        fontSize: 20,
    },

    date: {
        color: colors.lightGray,
        fontSize: 16
    },

    textTitle: {
        color: "#FFF",
        fontSize: 24,
        textAlign: "center"
    },

    loadingContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: colors.lightGray,
        fontSize: 18,
        fontWeight: '700'
    }
});

export default styles;