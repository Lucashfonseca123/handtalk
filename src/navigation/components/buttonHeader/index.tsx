import React from 'react';
import { Text, TouchableNativeFeedbackProps, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface IButtonHeader extends TouchableNativeFeedbackProps {
    title: string;
}

const ButtonHeader = ({title, ...rest}:IButtonHeader) => {
    return (
        <TouchableOpacity {...rest}><Text style={styles.headerText}>{title}</Text></TouchableOpacity>
    );
};

export default ButtonHeader;
