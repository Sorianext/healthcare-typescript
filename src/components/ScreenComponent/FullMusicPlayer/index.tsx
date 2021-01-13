import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import { Assets } from '@constant/Images';
import { styles } from './styles';

const livePlayURL = 'https://s4.radio.co/s8118d127d/low';

const FullMusicPlayer = () => {
    const [vol, setVolume] = useState(5);
    const [bPlay, setPlay] = useState(false);
    const [duration, setDuration] = useState(100);
    const [isSeeking, setIsSeeking] = useState(false);
    const [position, setPosition] = useState(0);

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
                <View style={styles.topTextCon}>
                    <Text style={styles.idtxt}>#Playlist 01</Text>
                    <Text style={styles.title}>Calm The Heart With a Serene Natural Atomosphere</Text>
                    <Text style={styles.nametxt}>Martin Orlando</Text>
                </View>
                <View style={styles.bottom}>
                    <View>
                        <View style={styles.timeCon}>
                            <Text style={styles.duetime}>04:12</Text>
                            <Text style={styles.totaltime}>12:31</Text>
                        </View>
                        <Slider
                            minimumValue          = {0}
                            maximumValue          = {duration}
                            thumbTintColor        = "transparent"
                            minimumTrackTintColor = "#FFF"
                            maximumTrackTintColor = "#FFF"
                            step                  = {1}
                            disabled              = {false}
                            onValueChange ={ val => {
                                TrackPlayer.pause();
                                setIsSeeking(true);
                            }}
                            onSlidingComplete={ val => {
                                TrackPlayer.play();
                                setPosition(val);
                                TrackPlayer.seekTo(val);
                            }}
                            value={position}
                            style={styles.slidebar}
                        />
                    </View>
                    <View style={styles.resumeCon}>
                        <TouchableOpacity  key="prev" >
                            <Image source={Assets.prev} style={styles.prevIcon}/>
                        </TouchableOpacity>
                        <TouchableOpacity  key="middle" onPress={() => togglePlayback()} style={styles.playCon}>
                            <Image source={bPlay ? Assets.bgPlay : Assets.bgPause} style={styles.playIcon}/>
                        </TouchableOpacity>
                        <TouchableOpacity  key="next" >
                            <Image source={Assets.next} style={styles.prevIcon}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
};

export default FullMusicPlayer;