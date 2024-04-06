import React, { ReactNode } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { RowComponent } from '.';
import { FONTFAMILY } from '../../assets/fonts';
import COLORS from '../assets/colors/Colors';
import TextComponent from './TextComponent';

interface Props {
    leftChildrent?: ReactNode;
    rightChildrent?: ReactNode;
    text?: string | undefined
}
const HeaderComponent = (props: Props) => {
    const { leftChildrent, rightChildrent, text } = props
    return (
        <View style={{
            padding: 10,
            borderBottomWidth: 0.2,
            borderBottomColor: COLORS.primaryGreyHex
        }}>
            <RowComponent justify='space-between'>
                <TouchableOpacity>
                    {leftChildrent}
                </TouchableOpacity>

                {text && (
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <TextComponent
                            text={text}
                            font={FONTFAMILY.poppins_bold}
                            color={COLORS.primaryBlackHex}
                            size={16} />
                    </View>
                )}

                {rightChildrent ? (
                    <TouchableOpacity>
                        {rightChildrent}
                    </TouchableOpacity>
                ) : (
                    <View style={{ flex: 0.1 }} />
                )}
            </RowComponent>
        </View>
    )
}

export default HeaderComponent