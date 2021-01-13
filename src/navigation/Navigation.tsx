import React, { FC, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Theme as NavigationTheme } from '@react-navigation/native/lib/typescript/src/types';
import { createStackNavigator } from '@react-navigation/stack';

import { useTheme } from '@components/ThemeContext/ThemeContext';
import { Route } from '@models/constants/route';
import { ROOT_STACK_OPTIONS, StackArguments, AuthArguments } from './NavigationTypings';

import Home from '@screens/home';
import Playlist from '@screens/normalContent/playlist';
import Playing from '@screens/normalContent/playing';

import Login from '@screens/auth/login';
import Register from '@screens/auth/register';

const Stack = createStackNavigator<StackArguments>();

export const Navigation : FC = () => {
    const { theme } = useTheme();

    const navigationTheme: NavigationTheme = useMemo(() => {
        return {
            dark : theme.dark,
            colors : {
                primary : theme.colors.primary,
                background : theme.colors.background,
                card : theme.colors.surface,
                border : theme.colors.onBackground,
                text : theme.colors.onSurface,
                notification : theme.colors.notification,
                mask2: theme.colors.mask2
            }
        };
    }, [theme]);

    return (
        <NavigationContainer theme={navigationTheme}>
            <Stack.Navigator screenOptions={ROOT_STACK_OPTIONS}>
                <Stack.Screen name={Route.HOME} component={Home} />
                <Stack.Screen name={Route.PLAYLIST} component={Playlist} />
                <Stack.Screen name={Route.PLAYING} component={Playing} />
                <Stack.Screen name={Route.AUTH} component={AuthStackNav} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const AuthStack = createStackNavigator<AuthArguments>();

const AuthStackNav = () => {
    return (
        <AuthStack.Navigator screenOptions={ROOT_STACK_OPTIONS} >
            <AuthStack.Screen name={Route.LOGIN} component={Login} />
            <AuthStack.Screen name={Route.REGISTER} component={Register} />
        </AuthStack.Navigator>
    );
};