import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress,style,style2 }) => {
    const allstyle=[styles.button,style]
    const textstyle=[styles.buttonText,style2]
    return (
        <TouchableOpacity style={allstyle} onPress={onPress}>
            <Text style={textstyle}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3E7073',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent:"center"
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
});

export default CustomButton;
