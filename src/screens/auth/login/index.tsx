
import React, { FC, useState } from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

import { InputWithImage, TopHeader2, SubmitButton } from '@components/ScreenComponent';
import { styles } from './styles';
import { useTheme } from '@components/ThemeContext/ThemeContext';
import { Assets } from '@constant/Images';
import { Route } from '@models/constants/route';
import { useNavigation } from '@react-navigation/native';

const Login :FC = () => {
    const nav = useNavigation();
    const { theme } = useTheme();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // tslint:disable-next-line: no-console
        console.log('handle login');
    };

    const gotoRegister = () => {
        nav.navigate(Route.REGISTER);
    };

    return (
        <View style={styles.container}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="light-content"/>
            <ImageBackground source={Assets.background} style={[styles.background]} resizeMode="stretch">
                <View style={{flex:1, backgroundColor: theme.colors.mask2}}>
                    <TopHeader2 leftBack={true} middle="Login" right={false}/>
                    <View style={styles.avatarCon}>
                        <ImageBackground source={Assets.star1} style={styles.imgBG1} resizeMode="contain">
                            <ImageBackground source={Assets.star1} style={styles.imgBG2} resizeMode="contain">
                                <TouchableOpacity style={styles.photoCon}>
                                    <Image source={Assets.angle} style={styles.angle}/>
                                </TouchableOpacity>
                            </ImageBackground>
                        </ImageBackground>
                        <Text style={[styles.description, {color: theme.colors.primary}]}>Drowzee Pendulum App</Text>
                    </View>
                    <View style={[styles.fmCon, {backgroundColor: theme.colors.background}]}>
                        <View style={styles.space} key="username"/>
                        <InputWithImage
                            value = {username}
                            keyType = "default"
                            secure = {false}
                            placeholder = "Username"
                            maxlen = {30}
                            img = {Assets.user}
                            onChange = {(txt) => setUserName(txt)}
                        />
                        <View style={styles.space} key="password"/>
                        <InputWithImage
                            value = {password}
                            keyType = "default"
                            secure = {true}
                            placeholder = "Password"
                            maxlen = {30}
                            img = {Assets.password}
                            onChange = {(txt) => setPassword(txt)}
                        />
                        <View style={styles.space} key="submit"/>
                        <SubmitButton
                            title = "Login"
                            onPress = {() => handleLogin()}
                        />
                        <View style={styles.space} key="footer"/>
                        <Text style={[styles.txt, {color: theme.colors.primary}]}>Don't have an account?
                            <Text style={styles.todaytext} onPress={gotoRegister}>  Registration</Text>
                        </Text>
                        <View style={{height: 20}} key="end"/>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Login;