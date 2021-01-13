
import { StyleSheet } from 'react-native';
import { frlRegular, Avenir } from '@constant/Unit';

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical: 10,
    },
    imgCon:{
        width: 64,
        height: 64
    },
    imgStyle:{
      borderRadius:8,
    },
    mask:{
        flex:1,
        borderRadius:8,
        backgroundColor:'rgba(0, 0, 0, .2)'
    },
    middle:{
        paddingLeft: 20,
    },
    left:{
        flexDirection:'row',
        alignItems:'center',
        width: '80%'
    },
    right:{
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#525B81',
        justifyContent:'center',
        alignItems:'center'
    },
    txt:{
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: .5,
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontFamily: frlRegular
    },
    duration:{
        fontFamily: Avenir,
        fontSize: 12,
        lineHeight: 20,
        letterSpacing: .5,
        color: '#FFF',
    },
    image:{
        width: 14,
        height:14
    },
    rightCon:{

    }
});
