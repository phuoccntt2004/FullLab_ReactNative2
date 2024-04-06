import { Lock, Sms } from 'iconsax-react-native';
import React, { useEffect, useState } from 'react';
import { FONTFAMILY } from '../../../assets/fonts';
import COLORS from '../../assets/colors/Colors';
import { Google } from '../../assets/svgs';
import { ButtonComponent, ContainerComponent, InputComponent, RowComponent, SectionComponent, TextComponent } from '../../components';
import { gobalStyles } from '../../styles/gobalStyles';
import auth from '@react-native-firebase/auth';
import { onGoogleButtonPress } from './onGoogleButtonPress';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';

const AuthScreen = ({ navigation }: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorText, setErrorText] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        if (email || password) {
            setErrorText("");
        }
    }, [email, password]);

    const handleSignInWithEmail = async () => {
        if (!email || !password) {
            setErrorText('Vui lòng nhập email và password!');
        } else {
            setErrorText('');
            setIsLoading(true);
            await auth().signInWithEmailAndPassword(email, password).then(userCredential => {
                const user = userCredential.user;
                console.log('user', user);
                user && dispatch(setUser({
                    email : user.email
                }));
                setIsLoading(false)
            }).catch((error: any) => {
                setIsLoading(false);
                console.log(error);

                setErrorText(error.message);
            })
        }
    }

    const handleSigUpWithEmail = async () => {
        if (!email || !password) {
            setErrorText('Vui lòng nhập email và password!');
        } else {
            setErrorText('');
            setIsLoading(true);
            await auth().createUserWithEmailAndPassword(email, password).then(userCredential => {
                const user = userCredential.user;
                
                user && dispatch(setUser({
                    email : user.email
                }));
                setIsLoading(false)
            }).catch((error: any) => {
                setIsLoading(false);
                setErrorText(error.message);
            })
        }
    }

    const handleSignInGoogle = async () => {

        const user = await onGoogleButtonPress();
        user && dispatch(setUser(user));
    }

    return (
        <ContainerComponent>
            <SectionComponent
                styles={{
                    justifyContent: 'center',
                    marginTop: 100
                }}>
                <TextComponent
                    text='Account'
                    size={32}
                    font={FONTFAMILY.poppins_bold}
                    styles={{ textAlign: 'center' }} />
            </SectionComponent>
            <SectionComponent>
                <TextComponent text='Email'
                    size={15}
                    font={FONTFAMILY.poppins_bold}
                    color={COLORS.HEX_BLUE_GRAY} />
                <InputComponent
                    value={email}
                    placeholder='Email'
                    onChange={val => setEmail(val)}
                    affix={<Sms size={20} color={COLORS.HEX_LIGHT_GREY} />} />
            </SectionComponent>
            <SectionComponent>
                <TextComponent text='PassWord'
                    size={15}
                    font={FONTFAMILY.poppins_bold}
                    color={COLORS.HEX_BLUE_GRAY} />
                <InputComponent
                    value={password}
                    placeholder='PassWord'
                    onChange={val => setPassword(val)}
                    isPassword
                    affix={<Lock size={20} color={COLORS.HEX_LIGHT_GREY} />} />
            </SectionComponent>
            {errorText && <TextComponent text={errorText} color={COLORS.RED} flex={0} styles={{ paddingStart: 15, marginBottom: 20 }} />}
            <SectionComponent>
                <RowComponent justify='space-around'>
                    <ButtonComponent
                        text='ĐĂNG NHẬP'
                        type='orange'
                        styles={{ width: 150 }}
                        onPress={handleSignInWithEmail}
                    />
                    <ButtonComponent
                        text='ĐĂNG KÝ'
                        type='orange'
                        styles={{ width: 150 }}
                        onPress={handleSigUpWithEmail}
                    />
                </RowComponent>
            </SectionComponent>
            <SectionComponent>
                <TextComponent
                    text='Đăng nhập với'
                    color={COLORS.HEX_LIGHT_GREY}
                    styles={{
                        textAlign: 'center',
                        fontSize: 16,
                        fontFamily: FONTFAMILY.poppins_medium,
                        marginBottom: 10
                    }} />
                <ButtonComponent
                    text='Google'
                    iconFlex='left'
                    type='orange'
                    styles={gobalStyles.shadow}
                    textColor={COLORS.HEX_LIGHT_GREY}
                    icon={<Google />}
                    onPress={handleSignInGoogle}
                />
            </SectionComponent>
        </ContainerComponent>
    )
}

export default AuthScreen

