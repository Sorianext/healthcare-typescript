
import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

interface Props {
    title: string;
    onPress: () => void;
}
const SubmitButton = (props: Props) => {
    
    return(
        <TouchableOpacity 
            style={styles.container}
            onPress={() => props.onPress()}
        >
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export default SubmitButton;