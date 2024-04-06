import React, { ReactNode } from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import { gobalStyles } from '../styles/gobalStyles';

interface Props{
    justify?:'center'|"flex-start"|'flex-end'|'space-between'|'space-around'|'space-evenly'|undefined;
    styles?:StyleProp<ViewStyle>;
    children:ReactNode;
    onPress?:()=>void;
}
const RowComponent = (props:Props) => {
    const {justify,styles,children,onPress}=props;
    const localStyleRemember=[
        gobalStyles.row,
        {
            justifyContent:justify
        },
        styles
    ]
  return (
    onPress ? (<TouchableOpacity style={localStyleRemember}>
        {children}
    </TouchableOpacity>):(<View style={localStyleRemember}>
        {children}
    </View>)
  )
}

export default RowComponent