import {
    ImageSourcePropType
  } from 'react-native';

export interface Music {
    id: string;
    title: string;
    thumbnail: ImageSourcePropType;
    duration: number;
}

export interface BlockProps {
    data: Music[];
}