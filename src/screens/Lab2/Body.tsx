import React, { useState } from 'react'
import { Alert, View } from 'react-native'
import { ButtonComponent, InputComponent, SectionComponent } from '../../components'
import { User } from '../../models/User'
import { Validate } from '../../utils/validate'
import COLORS from '../../assets/colors/Colors'
interface Props {
    onHandleUpdate: (data: User['data']) => void
    onHandleChangeBGFooter: () => void
}
const Body = React.memo((props: Props) => {
    const { onHandleUpdate, onHandleChangeBGFooter } = props
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const handleUpdateInfo = () => {
        if (name != null && Validate.image(image)) {
            onHandleUpdate({ name: name, avatar: image })
        } else {
            Alert.alert('Vui lòng điền đúng thông tin')
        }
    }
    return (
        <View style={{backgroundColor:COLORS.WHITE,flex:1}}  >
            <SectionComponent>
                <InputComponent placeholder='Nhập tên của bạn' onChange={val => setName(val)} value={name} />
            </SectionComponent>
            <SectionComponent>
                <InputComponent placeholder='Nhập địa chỉ hình ảnh' onChange={val => setImage(val)} value={image} />
            </SectionComponent>
            <SectionComponent>
                <ButtonComponent styles={{ height: 56 }} type='orange' text='Cập nhật thông tin' onPress={handleUpdateInfo} />
            </SectionComponent>
            <SectionComponent>
                <ButtonComponent styles={{ height: 56 }} type='orange' text='Thay đổi màu Footer' onPress={onHandleChangeBGFooter} />
            </SectionComponent>
        </View>
    )
})

export default Body