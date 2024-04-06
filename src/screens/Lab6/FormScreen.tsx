import React, { useState } from 'react';
import { Text } from 'react-native';
import { ButtonComponent, ContainerComponent, InputComponent, SectionComponent } from '../../components';
import { useSignupMutation } from '../../store/pokemon-api-slice';

const FormScreen = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [signup, { isLoading, isError, error }] = useSignupMutation();

    const handleSubmit = async () => {
        try {
            // Gửi dữ liệu lên máy chủ khi form được submit
            const res = await signup({
                email: "george.bluth@reqres.in",
                first_name: "George",
                last_name: "Bluth",
                avatar: "https://reqres.in/img/faces/1-image.jpg"
            }).unwrap();
            console.log(res);
            console.log('Dữ liệu đã được gửi lên máy chủ');
        } catch (error) {
            console.error('Lỗi khi gửi dữ liệu lên máy chủ:', error);
        }
    };

    const handleChange = (name: string, value: string) => {
        setFormData({ ...formData, [name]: value });
    };

    return (
        <ContainerComponent styles={{marginTop: 30}}>
            <SectionComponent>
                <InputComponent
                    placeholder="Email"
                    value={formData.username}
                    onChange={(text) => handleChange('email', text)}
                />
            </SectionComponent>
            <SectionComponent>
                <InputComponent
                    placeholder="first_name"
                    value={formData.email}
                    onChange={(text) => handleChange('first_name', text)}
                />
            </SectionComponent>
            <SectionComponent>
                <InputComponent
                    placeholder="last_name"
                    value={formData.password}
                    onChange={(text) => handleChange('last_name', text)}
                />
            </SectionComponent>
            <SectionComponent>
                <InputComponent
                    placeholder="avatar"
                    value={formData.password}
                    onChange={(text) => handleChange('avatar', text)}
                />
            </SectionComponent>
            <SectionComponent>
                <ButtonComponent
                    text={isLoading ? 'Đang gửi...' : 'Gửi'}
                    onPress={handleSubmit}
                    disable={isLoading}
                    type='orange'
                    styles= {{padding: 10}}
                />
            </SectionComponent>
            {isError && 'message' in error && <Text>{error.message}</Text>}
        </ContainerComponent>
    );
}

export default FormScreen