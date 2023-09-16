import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
    title: {
        color: colors.lightGray,
        fontWeight: '700',
        fontSize: 24,
        marginBottom: -26,
        marginLeft: 24
    },
    box: {
        marginTop: 10,
        alignItems: 'center'
    },
});

export default styles;