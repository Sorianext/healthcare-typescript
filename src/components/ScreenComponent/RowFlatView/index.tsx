import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import { styles } from './styles';

import { Music } from '@models/mockup-models';
import { Assets } from '@constant/Images';
import BGMusicPlayer from '../BGMusicPlayer';

interface Props {
    data: Music[];
}

const RowFlatView = (props: Props) => {
    const navigation = useNavigation();
    const [bPlay, setPlay] = useState(false);
    const [curIndex, setCurIndex] = useState(0);

    const handlePlay = (index: number) => {
        setPlay(!bPlay);
        setCurIndex(index);
    };

    return (
        <View style={{flex:1}}>
            <FlatList
                data={props.data}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({item, index}) => {
                    return (
                        <View style={styles.container} >
                            <View style={styles.left}>
                                <ImageBackground source={item.thumbnail} style={styles.imgCon} imageStyle={styles.imgStyle}>
                                    <View style={styles.mask}/>
                                </ImageBackground>
                                <View style={styles.middle} >
                                    <Text style={styles.txt}>{item.title}</Text>
                                    <Text style={styles.duration}>{item.duration} minutes</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={ styles.right} onPress={() => handlePlay(index) }>
                                <Image source={Assets.whitePlay} style={styles.image} resizeMode="stretch"/>
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
            {bPlay && <BGMusicPlayer item={props.data[curIndex]}/>}
        </View>
    );
};

export default RowFlatView;
