import { FC } from 'react';

import { RouteProp } from '@react-navigation/native';
import { StackNavigationOptions, StackNavigationProp } from '@react-navigation/stack';

import { modalStyleInterpolator } from './Interpolators';
import { Route } from '@models/constants/route';
import { Music } from '@models/mockup-models';

/**
 * Determines which params can be passed to which screens
 */
export type StackArguments = {
    [Route.ROUTE]: {},
    [Route.HOME]: {},
    [Route.PLAYLIST]: { itemParam : Music },
    [Route.PLAYING]: {itemParam : Music},
    [Route.AUTH]: {},
};

export type AuthArguments = {
    [Route.LOGIN]: {},
    [Route.REGISTER]: {},
};
/**
 * Navigation options for the root stack
 */
export const ROOT_STACK_OPTIONS: StackNavigationOptions = {
    title: 'Starter',
    headerShown: false,
    cardOverlayEnabled: true,
    cardStyleInterpolator: modalStyleInterpolator,
};

/**
 * Navigation options for the modal screen
 */
export const MODAL_SCREEN_OPTIONS: StackNavigationOptions = {
    headerShown: false
};

/**
 * Abstraction over the different navigation props
 */
export interface NavigationScreenProps<TName extends keyof StackArguments> {
    navigation: StackNavigationProp<StackArguments, TName>;
    route: RouteProp<StackArguments, TName>;
}

/**
 * Abstraction over React.FC which only allows known routes
 */
export type NavigationScreen<TName extends keyof StackArguments> = FC<NavigationScreenProps<TName>>;
