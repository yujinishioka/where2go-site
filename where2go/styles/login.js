import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    top: {
        flex:3,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#202857'
    },
    form: {
        display: 'flex',
        flex:7,
        alignItems: 'center',
        padding: 20,
        borderWidth: 6,
        borderColor: '#202857',
        margin:20
    },
    logo: {
        width: 220,
        height: 220
    },
    input: {
        width: '100%',
        height: 40,
        background:'#e7e7e7',
        color:'black',
        borderRadius:8,
        margin:12,
        padding: '0 0 0 15px'
    },
    title: {
        flex:1,
        justifyContent:'flex-start',
        fontSize:30,
        fontWeight:500,
        marginTop:30,
        color:'#202857',
    },
    buttonPrimary: {
        width:110,
        height:35,
        textAlign:'center',
        justifyContent:'center',
        borderRadius: 25,
        background:'#202857'
    },
    txtButton: {
        color:'#fff',
    },
    width:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:35
    },
    links:{
        marginTop:20
    },
    link:{
        textDecorationLine:'underline',
        textDecorationColor:'#5170fd',
        fontSize:15,
        textAlign:'center',
        color:'black',
    }
});

export default styles;