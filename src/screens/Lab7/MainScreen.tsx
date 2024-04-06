import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FONTFAMILY } from '../../../assets/fonts';
import COLORS from '../../assets/colors/Colors';
import { ButtonComponent, ContainerComponent, SectionComponent, TextComponent } from '../../components';
import { Image } from 'react-native';
import { removeUser } from '../../store/userSlice';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const MainScreen = () => {
  const user = useSelector((state: any) => state.User.user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await GoogleSignin.signOut()
    dispatch(removeUser()); // Gửi action đến Redux store để đăng xuất người dùng
  };
  return (
    <ContainerComponent>
      <SectionComponent>
      {user.photo && (
          <Image src={user.photo} alt="User Avatar" style={{ width: 100, height: 100, borderRadius: 50 }} />
        )}
        <TextComponent
          text={user.email}
          color={COLORS.HEX_LIGHT_GREY}
          size={18}
          font={FONTFAMILY.poppins_medium} />
        <TextComponent
          text={user.name}
          color={COLORS.HEX_LIGHT_GREY}
          size={18}
          font={FONTFAMILY.poppins_medium} />
        <TextComponent
          text="0867475745"
          color={COLORS.HEX_LIGHT_GREY}
          size={18}
          font={FONTFAMILY.poppins_medium} />
      </SectionComponent>
      <SectionComponent>
        <ButtonComponent
          text='ĐĂNG XUẤT'
          type='orange'
          onPress={handleLogout}
        />
      </SectionComponent>
    </ContainerComponent>
  )
}

export default MainScreen