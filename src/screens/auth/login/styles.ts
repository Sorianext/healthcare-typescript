import { StyleSheet } from 'react-native';
import { W, Avenir, frlRegular, isIOS } from '@constant/Unit';

export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    background:{
        flex:1
    },
    avatarCon:{
        marginTop: '10%',
        width: W,
        alignItems:'center'
    },
    description:{
        fontSize: 16,
        lineHeight:26,
        marginTop: 20,
        letterSpacing: 1,
        fontWeight: '800',
        fontFamily: Avenir,
    },
    imgBG1:{
        width: 167,
        height: 167
    },
    imgBG2:{
        width: 167,
        height: 167,
        transform: [{rotate: '45deg'}],
        justifyContent:'center',
        alignItems:'center'
    },
    photoCon:{
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#9268CD',
        justifyContent:'center',
        alignItems:'center'
    },
    angle:{
        transform: [{rotate: '-45deg'}]
    },
    fmCon:{
        position: 'absolute',
        bottom: 0,
        width: W,
        padding: 20
    },
    txt:{
        fontFamily:Avenir,
        alignSelf: 'center',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing:.5
    },
    todaytext:{
        fontSize: 14,
        lineHeight: 20,
        letterSpacing:.5,
        color: '#FFE81B',
        fontFamily: Avenir,

    },
    space:{
        height: 10
    }
});
