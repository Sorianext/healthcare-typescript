import { StyleSheet } from 'react-native';
import { Avenir, mgTop, W } from '@constant/Unit';

export const styles = StyleSheet.create({
    container:{
        width: W - 40,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        height:56,
        borderRadius: 28,
        paddingHorizontal: 28,
        backgroundColor: '#FFFFFF'
    },
    title:{
        fontFamily: Avenir,
        fontWeight: '800',
        fontSize: 16,
        lineHeight: 26,
        letterSpacing: 1,
        color: '#2A3353',
    },
});