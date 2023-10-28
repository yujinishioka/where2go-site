import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 10,
        paddingTop: 20,
    },
    flatList: {
        marginTop: 16,
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