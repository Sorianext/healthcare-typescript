import React from 'react';
import {
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import { useTheme } from '@components/ThemeContext/ThemeContext';
import { NavigationScreenProps } from '@navigation/NavigationTypings';
import { Route } from '@models/constants/route';

import { RowFlatView, Footer } from '@components/ScreenComponent';
import { Assets } from '@constant/Images';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const mkData = [
    {
        id: '1',
        title: 'Starry Night',
        thumbnail: Assets.test3,
        duration: 14
    },
    {
        id: '2',
        title: 'Alone with nature',
        thumbnail: Assets.test4,
        duration: 8
    },
    {
        id: '3',
        title: 'Focus on what matter',
        thumbnail: Assets.test5,
        duration: 12
    },
    {
        id: '4',
        title: 'Starry Night',
        thumbnail: Assets.test3,
        duration: 18
    },
    {
        id: '5',
        title: 'Alone with nature',
        thumbnail: Assets.test4,
        duration: 5
    }
];

const Playlist = ( props : NavigationScreenProps<Route.PLAYLIST> ) => {
    const { theme } = useTheme();
    const nav = useNavigation();
    const item = props.route.params.itemParam;

    const gotoPalying = () => {
        nav.navigate(Route.PLAYING);
    };

    return (
        <View style={styles.container}>
            <StatusBar translucent={true} backgroundColor={theme.colors.background} barStyle="light-content"/>
            <TouchableOpacity style={styles.header} onPress={() => props.navigation.goBack()}>
                <Image source={Assets.leftArrow}/>
            </TouchableOpacity>
            <ImageBackground style={styles.imageBG} source={item.thumbnail} imageStyle={styles.imgStyle}>
                <View style={styles.mask}>
                    <Text style={[styles.txt, {color: theme.colors.primary}]}>{item.title}</Text>
                </View>
            </ImageBackground>
            <View style={styles.middle}>
                <Text style={[styles.playlisttxt, {color: theme.colors.primary}]}>Playlist</Text>
                <TouchableOpacity onPress={() => gotoPalying()}>
                    <Text style={styles.playalltxt}>Play All</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <RowFlatView data={mkData}/>
            </View>
            <View style={[styles.footer, {backgroundColor:theme.colors.background}]}>
                <Footer/>
            </View>
        </View>
    );
};

export default Playlist;