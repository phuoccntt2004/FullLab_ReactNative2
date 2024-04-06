import { View, Text } from 'react-native'
import React from 'react'
import { SectionComponent, TextComponent } from '../../components';
interface Props {
    timeUpdate: string;
    backgroundColor: string
}
const Footer = React.memo((props: Props) => {
    const { timeUpdate, backgroundColor } = props
    return (
        <SectionComponent styles={{
            width:'100%',
            height:70,
            backgroundColor: backgroundColor,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: 0,
            right:0,
            left:0
        }}>
            <TextComponent text={`Thời gian bạn cập nhật thông tin: ${timeUpdate}`} />
        </SectionComponent>
    )
})

export default Footer