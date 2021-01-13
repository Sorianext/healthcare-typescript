
import { StyleSheet } from 'react-native';
import { Avenir, frlRegular, W  } from '@constant/Unit';

export const styles = StyleSheet.create({
    cassett:{
        position: 'absolute',
        width: W,
        bottom: 0,
        left: -20,
        height: 72,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#525B81',
    },
    leftCon:{
        width: .8 * W,
        flexDirection: 'row',
        alignItems:'center'
    },
    imgCon:{
        width: 48,
        height: 48,
        backgroundColor:'yellow',
        borderRadius: 24,
        justifyContent:'center',
        alignItems: 'center'
    },
    image: {
        width: 44,
        height: 44,
        borderRadius: 22
    },
    playIcon:{
        width:28,
        height: 28,
        borderRadius:14
    },
    txtCon:{
        paddingLeft: 20
    },
    duration:{
        fontFamily: Avenir,
        fontSize: 12,
        lineHeight: 20,
        letterSpacing: .5,
        color: '#FFF',
    },
    txt:{
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: .5,
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontFamily: frlRegular
    }
});
