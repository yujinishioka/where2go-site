import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 10,
        paddingTop: 20,
    },
    box: {
        marginTop: 20,
        marginBottom: 60,
        padding: 16,
        backgroundColor: colors.darkGray,
        borderColor: colors.lightGray,
        borderWidth: 2,
        borderRadius: 20,
    },
    boxAtividade: {
        marginVertical: 6
    },
    title: {
        color: colors.lightGray,
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 4,
    },
    text: {
        color: colors.lightGray,
        fontSize: 18,
        marginVertical: 1,
        fontFamily: 'Montserrat',
    },
    textBold: {
        fontWeight: '700',
    },
    textAtividades: {
        color: colors.lightGray,
        fontSize: 18,
        fontWeight: '700',
        alignSelf: 'center',
    }
});

export default styles;