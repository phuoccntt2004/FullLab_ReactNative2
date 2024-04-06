import React, { useState } from 'react'
import { Image } from 'react-native'
import { CameraOptions, ImageLibraryOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { ButtonComponent, ContainerComponent, RowComponent, SectionComponent } from '../../components'

const Bai1_2_Lab4 = () => {
    const [selectImage, setImage] = useState('')


    const takePhotoFromCamera = () => {
        let options: CameraOptions = {
            mediaType: 'photo',
            includeBase64: true,
        }
        launchCamera(options, response => {
            if (response?.assets && response.assets.length > 0) {
                const firstImageUri = response.assets[0].uri;
                if (firstImageUri !== undefined) {
                    setImage(firstImageUri);
                }
            }
        })
    }
    const PickerImage = () => {
        let options: ImageLibraryOptions = {
            mediaType: 'photo',
            includeBase64: true,
        }
        launchImageLibrary(options, response => {
            if (response?.assets && response.assets.length > 0) {
                // Kiểm tra xem uri có được định nghĩa không trước khi đặt state
                const firstImageUri = response.assets[0].uri;
                if (firstImageUri !== undefined) {
                    setImage(firstImageUri);
                }
            }
        })
    }
    return (
        <ContainerComponent>
            <SectionComponent>
                <RowComponent justify='center'>
                <Image style={{ width: 200, height: 200 ,borderRadius:100, margin: 30}} source={{ uri: selectImage || 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg' }} />
                </RowComponent>
            </SectionComponent>
            <SectionComponent>
                <ButtonComponent styles={{ height: 56 }} type='orange' text='Chụp ảnh từ điện thoại' onPress={takePhotoFromCamera} />
            </SectionComponent>
            <SectionComponent>
                <ButtonComponent styles={{ height: 56 }} type='orange' text='Chọn ảnh từ thư viện' onPress={PickerImage} />
            </SectionComponent>
        </ContainerComponent>
    )
}

export default Bai1_2_Lab4