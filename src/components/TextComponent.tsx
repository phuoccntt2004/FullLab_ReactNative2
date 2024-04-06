import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import { FONTFAMILY } from '../../assets/fonts';
import COLORS from '../assets/colors/Colors';
import { gobalStyles } from '../styles/gobalStyles';

interface Props{
    text:string|undefined;
    color?:string;
    size?:number;
    flex?:number;
    font?:string;
    styles?:StyleProp<TextStyle>;
    title?:boolean;
    numberOfLines?:number|undefined;
}
const TextComponent = (props:Props) => {
    const {text, color, size, flex, font, styles, title, numberOfLines} = props;
    return (
      <Text numberOfLines={numberOfLines} style = {[
          gobalStyles.text,
          {
              color: color ?? COLORS.HEX_BLACK,  // color của người dùng truyền vào hoặc color tích hợp sẵn
              flex: flex ?? 0, // nếu không truyền flex thì mặc định sẽ là 0
              fontSize: size ? size : title ? 34 : 16, //custom size hoặc nếu title thì là 34 còn text thì là 16
              fontFamily: font ? font : FONTFAMILY.poppins_regular, // nếu title thì regular
          },
          styles,
      ]}>{text}</Text>
    )
}

export default TextComponent