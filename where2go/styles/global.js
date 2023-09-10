import { StyleSheet } from 'react-native';
import colors from './colors';

const stylesGlobal = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: colors.lightGray,
    },
    textBold: {
        color: colors.lightGray,
        fontWeight: '800'
    },
    textInput: {
        backgroundColor: colors.background,
        color: colors.lightGray,
        marginVertical: 6,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    form: {
        backgroundColor: colors.darkGray,
        padding: 30,
        borderRadius: 30
    },
});

export default stylesGlobal;