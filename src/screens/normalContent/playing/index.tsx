import React from 'react';
import {
    View,
    Image,
    StatusBar,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

import { FullMusicPlayer } from '@components/ScreenComponent';
import { styles } from './styles';
import { useTheme } from '@components/ThemeContext/ThemeContext';
import { Assets } from '@constant/Images';
import { NavigationScreenProps } from '@navigation/NavigationTypings';
import { Route } from '@models/constants/route';

const Playing = (props : NavigationScreenProps<Route.HOME> ) => {
    const { theme } = useTheme();
    
    return (
        <View style={styles.container}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="light-content"/>
            <ImageBackground source={Assets.background} style={styles.background} resizeMode="stretch">
                <View style={styles.headerCon}>
                    <TouchableOpacity style={styles.back} onPress={() => props.navigation.goBack()}>
                        <Image source={Assets.leftArrow}/>
                    </TouchableOpacity>
                    <View style={styles.headRight}>
                        <TouchableOpacity style={styles.share} key="share">
                            <Image source={Assets.share} style={styles.shareIcon} resizeMode="stretch"/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.share} key="downSelect">
                            <Image source={Assets.downArrow} style={styles.shareIcon} resizeMode="stretch"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <FullMusicPlayer />
            </ImageBackground>
        </View>
    );
};

export default Playing;
