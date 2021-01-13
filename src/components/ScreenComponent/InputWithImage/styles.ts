import { StyleSheet } from 'react-native';
import { Avenir, mgTop, W } from '@constant/Unit';

export const styles = StyleSheet.create({
    container:{
        width: W - 40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        height:56,
        borderRadius: 28,
        paddingHorizontal: 28,
        backgroundColor: '#525B81'
    },
    input:{
        flex: 1,
        textAlignVertical:'center',
        textAlign:'left',
        color: '#FFFFFF',
        marginLeft: 15
    },
    image:{
        width: 20,
        height: 20
    },
});