import { Route } from '@models/constants/route';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import { styles } from './styles';

import { Music } from '@models/mockup-models';

interface Props {
    data: Music[];
}

const FlatView = (props: Props) => {
    const navigation = useNavigation();
    
    const gotoPlaylist = ( item : Music ) => {
        navigation.navigate(Route.PLAYLIST, { itemParam : item });
    };

    return (
        <View style={{paddingRight: 25}}>
            <FlatList
                data={props.data}
                keyExtractor={(item) => item.id}
                horizontal = {true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                    return (
                        <ImageBackground source={item.thumbnail} style={styles.container} imageStyle={styles.imgStyle}>
                            <TouchableOpacity style={styles.mask} onPress={() => gotoPlaylist(item)}>
                                <Text style={styles.txt}>{item.title}</Text>
                                <Text style={styles.duration}>{item.duration} minutes</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    );
                }}
            />
        </View>
    );
};

export default FlatView;
