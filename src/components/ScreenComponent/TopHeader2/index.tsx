
import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    ImageSourcePropType,
} from 'react-native';
import { styles } from './styles';
import { Assets } from '@constant/Images';
import { useNavigation } from '@react-navigation/native';
interface Props {
    leftBack: boolean;
    middle: string;
    right?: boolean;
}

const TopHeader = ( props : Props ) => {
    const navigation = useNavigation();

    return (
        <View style={styles.topcontainer}>
            {props.leftBack && <TouchableOpacity style={styles.rightCon} key="left" onPress={() => navigation.canGoBack() ? navigation.goBack() : null}>
                <Image source={Assets.leftArrow} style={styles.image}/>
            </TouchableOpacity>}
            <Text style={styles.txt}>{props.middle}</Text>
            <View style={styles.rightCon} key="right"/>
        </View>
    );
};
export default TopHeader;
