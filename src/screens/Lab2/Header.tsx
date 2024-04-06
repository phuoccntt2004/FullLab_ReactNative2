import React from 'react'
import { Image, View } from 'react-native'
import { FONTFAMILY } from '../../../assets/fonts'
import COLORS from '../../assets/colors/Colors'
import { RowComponent, SectionComponent } from '../../components'
import TextComponent from '../../components/TextComponent'
import { User } from '../../models/User'

const Header:React.FC<User>=React.memo((props) => {
    const {data}=props
  return (
    <View style={{backgroundColor:COLORS.WHITE}}>
        <SectionComponent styles={{flexDirection:'row',paddingTop:15}}>
            {data.avatar!=null ?(<Image style={{width:50, height:50,marginEnd:20}} source={{uri:data.avatar}}/>):undefined}
            <RowComponent styles={{flexDirection:'column',alignItems:'flex-start'}}>
                <TextComponent text='Chào mừng ngày mới' color='black'/>
                <TextComponent text={data.name} color='black' font={FONTFAMILY.poppins_bold}/>
            </RowComponent>
        </SectionComponent>
    </View>
  )
})

export default Header