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
        padding: 16,
        backgroundColor: colors.darkGray,
        borderColor: colors.lightGray,
        borderWidth: 2,
        borderRadius: 20,
    },

    boxMenu: {
        alignItems: 'flex-end',
    },

    title: {
        color: colors.lightGray,
        fontSize: 20,
    },

    date: {
        color: colors.lightGray,
        fontSize: 16
    },

    touchable: {
        color: colors.lightGray,
        fontSize: 18,
        margin: 4
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