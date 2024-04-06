import { ArrowLeft2, User, UserSquare } from 'iconsax-react-native'
import React from 'react'
import { ContainerComponent, HeaderComponent, RowComponent, SectionComponent } from '../../components'
import ButtonComponent from '../../components/ButtonComponent'
import COLORS from '../../assets/colors/Colors'

const Bai1 = ({navigation}:any) => {
  return (
    <ContainerComponent>
        <SectionComponent>
            <HeaderComponent 
                leftChildrent={<ArrowLeft2 size="25" color={COLORS.DARK_BLUE}/>}
                text='Header'
                rightChildrent={<UserSquare size="25" color={COLORS.DARK_BLUE} variant="Bold"/>}/>
            <HeaderComponent 
                leftChildrent={<ArrowLeft2 size="25" color={COLORS.DARK_BLUE}/>}
                text='Trang chủ'/>
            <HeaderComponent 
                leftChildrent={<ArrowLeft2 size="25" color={COLORS.DARK_BLUE}/>}/>
        </SectionComponent>
        <SectionComponent>
            <RowComponent justify='center'>
                <ButtonComponent type='orange' text='Bài 2' onPress={()=>navigation.navigate('Lab1_Bai2')}/>
            </RowComponent> 
        </SectionComponent>
    </ContainerComponent>
  )
}

export default Bai1