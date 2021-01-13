
import { StyleSheet } from 'react-native';
import { Avenir, frlRegular, W } from '@constant/Unit';

export const styles = StyleSheet.create({
    cassett:{
        flex: 1,
        padding: 20,
        justifyContent:'space-between',
        alignItems:'center'
    },
    prevIcon:{
        width:36,
        height: 36,
        borderRadius:18
    },
    playIcon:{
        position:'absolute',
        top:-10,
        left: -10,
        width:56,
        height: 56,
        borderRadius:28
    },
    playCon:{
        width:56,
        height: 56,
        borderRadius:28,
        borderWidth: 10,
        borderColor:'#FFF'
    },
    resumeCon:{
        width: .6 * W,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop: 50
    },
    resume:{
        color: '#FFF',
        fontFamily: Avenir,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 20,
        letterSpacing: .5,
        marginLeft: 20
    },
    title:{
        fontFamily: frlRegular,
        fontWeight:'700',
        fontSize: 24,
        color: '#FFF',
        lineHeight: 32,
        letterSpacing: 1,
        marginTop: 20,
        textAlign:'center'
    },
    slidebar:{
        width: W - 20,
        marginTop: 10,
        marginBottom: 10
    },
    topTextCon:{
        alignItems:'center'
    },
    idtxt:{
        fontFamily: Avenir,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 20,
        letterSpacing: .5,
        textAlign:'center',
        color: '#FFF'
    },
    nametxt:{
        fontFamily: Avenir,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 20,
        letterSpacing: .5,
        marginTop: 20,
        textAlign:'center',
        color: 'yellow'
    },
    bottom:{
        alignItems:'center',
        justifyContent:'flex-end',
        paddingBottom: 20
    },
    timeCon : {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    duetime:{
        fontFamily: Avenir,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 20,
        letterSpacing: .5,
        textAlign:'center',
        marginLeft: 20,
        color: '#FFF'
    },
    totaltime:{
        fontFamily: Avenir,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 20,
        letterSpacing: .5,
        textAlign:'center',
        marginRight: 20,
        color: '#FFF'
    }
});
