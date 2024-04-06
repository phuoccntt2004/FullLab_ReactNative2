import React, { ReactNode } from 'react';
import { StyleProp, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { FONTFAMILY } from '../../assets/fonts';
import COLORS from '../assets/colors/Colors';
import { gobalStyles } from '../styles/gobalStyles';
import TextComponent from './TextComponent';

interface Props {
  icon?: ReactNode;
  text: string;
  type?: 'orange' | 'text' | 'link'; // kiểu button mặc định hoặc chữ thường hoặc link chữ
  color?: string;
  styles?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyles?: StyleProp<TextStyle>;
  textFont?: string;
  onPress?: () => void;
  iconFlex?: 'right' | 'left';
  disable?: boolean; // nút button khóa, không cho người dùng nhấn vào
}

const ButtonComponent = (props: Props) => {
  const {
    icon,
    text,
    type,
    color,
    styles,
    textColor,
    textStyles,
    textFont,
    onPress,
    iconFlex,
    disable } = props;
  // Destructuring đối tượng
  // custom button sau đó là style riêng và cuối cùng là styles đè lên
  return  type === 'orange' ? (
    <TouchableOpacity disabled={disable}
      onPress={onPress}
      style={[
        gobalStyles.button, {
          backgroundColor: color ? color : disable ? COLORS.HEX_LIGHT_GREY : COLORS.primaryBlackHex,
        }, styles]}>
      {icon && iconFlex === 'left' && icon}
      <TextComponent
        text={text}
        color={textColor ?? COLORS.HEX_ORANGE}
        font={textFont ?? FONTFAMILY.poppins_bold}
        styles={[textStyles, {
          marginLeft: icon ? 15 : 0,
          fontSize: 16, 
          textAlign: 'center'
        },
        ]}
        flex={icon && iconFlex === 'right' ? 1 : 0}
      />
      {icon && iconFlex === 'right' && icon}
    </TouchableOpacity> // nếu icon và iconFlex = right thì nó sẽ nằm về phía bên phải
  ) : (
    <TouchableOpacity onPress={onPress}>
      <TextComponent 
        text={text}
        color={type === 'link' ? COLORS.HEX_ORANGE : COLORS.HEX_BLACK}/>
    </TouchableOpacity>
  )
}

export default ButtonComponent;