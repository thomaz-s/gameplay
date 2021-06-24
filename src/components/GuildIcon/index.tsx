import React from 'react';
import { Image } from 'react-native'

import { styles } from './styles';

export function GuildIcon(){
    const uri = 'https://i.pinimg.com/736x/d6/11/54/d61154b2cae2e1c123477eaecbdbd487.jpg';

    return (
        <Image 
            source={{uri}}
            style={styles.image}
            resizeMode='cover'
        />
    );
}