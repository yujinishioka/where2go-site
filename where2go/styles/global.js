import { StyleSheet } from 'react-native';
import colors from './colors';

const stylesGlobal = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerPage: {
        backgroundColor: colors.background,
        padding: 16,
        minHeight: '100%',
    },
    text: {
        color: colors.lightGray,
        fontSize: 18,
    },
    textBold: {
        color: colors.lightGray,
        fontSize: 18,
        fontWeight: '800',
    },
    textInput: {
        backgroundColor: colors.background,
        color: colors.lightGray,
        fontSize: 18,
        marginVertical: 6,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    textExplain: {
        color: colors.lightGray,
        fontSize: 14,
    },
    form: {
        backgroundColor: colors.darkGray,
        display: 'flex',
        marginVertical: 30,
        padding: 30,
        borderColor: colors.lightGray,
        borderWidth: 2,
        borderRadius: 30,
    },
    formHalfLeft: {
        width: '48%',
        marginRight: '4%',
        marginVertical: 4,
    },
    formHalfRight: {
        width: '48%',
        marginVertical: 4,
    },
    formFull: {
        width: '100%',
        marginVertical: 4,
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

export default stylesGlobal;