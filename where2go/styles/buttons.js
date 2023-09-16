import { StyleSheet } from 'react-native';

import colors from './colors'

const styles = StyleSheet.create({
    btnPrimary: {
        backgroundColor: colors.primary,
        padding: 8,
        marginVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 18,
    },
    btnMenu: {
        backgroundColor: colors.darkGray,
        padding: 8,
        borderRadius: 40,
    },
    btnMenuText: {
        color: colors.lightGray,
        fontSize: 30,
        fontWeight: '700',
        marginLeft: 30,
        paddingBottom: 10,
    },
    menuBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
    }
});

export default styles;