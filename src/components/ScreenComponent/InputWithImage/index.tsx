import * as React from 'react';
import { View, TextInput, Image, ImageSourcePropType } from 'react-native';
import { styles } from './styles';

interface Props {
    img: ImageSourcePropType;
    value: string;
    maxlen: number;
    placeholder: string;
    keyType: string;
    secure: boolean;
    onChange: (text: string) => void;
}
const InputWithImage = (props: Props) => {
    
    return(
        <View style={styles.container}>
            <Image source={props.img} style={styles.image} resizeMode="contain"/>
            <TextInput 
                placeholder={props.placeholder}
                placeholderTextColor={'#FFFFFF'}
                style={styles.input}
                value = {props.value}
                maxLength={props.maxlen}
                multiline={false}
                secureTextEntry = {props.secure}
                keyboardType={props.keyType === 'email' ? 'email-address' : 'default'}
                onChangeText={(text) => props.onChange(text)}
            />
        </View>
    );
};

export default InputWithImage;