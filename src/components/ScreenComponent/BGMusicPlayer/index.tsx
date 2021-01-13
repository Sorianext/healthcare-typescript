
import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { Assets } from '@constant/Images';
import { styles } from './styles';
import { Music } from '@models/mockup-models';

const livePlayURL = 'https://s4.radio.co/s8118d127d/low';

interface Props {
    item: Music;
}

const BGMusicPlayer = (props : Props) => {
    const item = props.item;
    const [vol, setVolume] = useState(5);
    const [bPlay, setPlay] = useState(false);

    useEffect(() => {
        const Init = () => {
            TrackPlayer.setupPlayer().then(() => {
                TrackPlayer.add({
                    id: 'trackId',
                    url: livePlayURL,
                    title: 'Title',
                    artist: 'Artist'
                });
            });
            TrackPlayer.updateOptions({
                capabilities: [
                  TrackPlayer.CAPABILITY_PLAY,
                  TrackPlayer.CAPABILITY_PAUSE,
                ],
                compactCapabilities:[
                    TrackPlayer.CAPABILITY_PLAY,
                    TrackPlayer.CAPABILITY_PAUSE
                ],
            });
            const currentTrack = TrackPlayer.getCurrentTrack();
            if (currentTrack == null) {
              TrackPlayer.reset();
              TrackPlayer.setVolume(vol / 10);
            }
        };
        Init();
        return () => {
            setPlay(false);
            TrackPlayer.reset();
        };
    }, []);

    const togglePlayback = () => {
        if ( !bPlay ) {
            TrackPlayer.play();
            setPlay(true);
        }else{
            TrackPlayer.pause();
            setPlay(false);
        }
    };

    return (
        <>
            <View style={styles.cassett} >
                <View style={styles.leftCon}>
                    <View style={styles.imgCon}>
                        <Image source={item.thumbnail} style={styles.image}/>
                    </View>
                    <View style={styles.txtCon}>
                        <Text style={styles.txt}>{item.title}</Text>
                        <Text style={styles.duration}>{item.duration} Minute</Text>
                    </View>
                </View>
                <TouchableOpacity  key="middle" onPress={() => togglePlayback()}>
                    <Image source={bPlay ? Assets.play : Assets.bgPause} style={styles.playIcon}/>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default BGMusicPlayer;