import { StyleSheet } from 'react-native';
import { W, H, Avenir, frlRegular, isIOS, mgTop } from '@constant/Unit';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 20,
        paddingTop: mgTop + 20,
    },
    header:{
        paddingVertical: 10,
        width: 30
    },
    imageBG:{
        width: W - 40,
        height: H / 2 - mgTop - 80,
        marginTop: 10,
    },
    imgStyle:{
        borderRadius: 20
    },
    mask:{
        flex:1,
        borderRadius:20,
        backgroundColor:'rgba(0, 0, 0, .2)',
        justifyContent:'center',
        alignItems:'center'
    },
    content:{
        flex:1,
        paddingTop:20,
        paddingBottom: isIOS ? 90 : 60
    },
    txt:{
        fontFamily:frlRegular,
        fontSize: 24,
        lineHeight: 32,
        letterSpacing:1
    },
    middle:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop: 20,
        paddingVertical:5
    },
    playlisttxt:{
        fontFamily: Avenir,
        fontWeight: '800',
        fontSize: 16,
        lineHeight: 26,
        letterSpacing: 1
    },
    playalltxt:{
        color: 'yellow',
        fontFamily: Avenir,
        fontWeight: '800',
        fontSize: 16,
        lineHeight: 26,
        letterSpacing: 1
    },
    footer:{
        position:'absolute',
        bottom:0,
        shadowColor: 'rgba(255, 255, 255, .16)',
        shadowOffset: {width: 0, height: -4},
        shadowRadius: 32,
        elevation: 5
    },
    space:{
        height: isIOS ? 120 : 90
    }
});
