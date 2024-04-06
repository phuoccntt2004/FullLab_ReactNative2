import React from 'react';
import { Button, Image, View } from 'react-native';
import { SectionComponent } from '.';
import { gobalStyles } from '../styles/gobalStyles';
import TextComponent from './TextComponent';
interface Props{
    title_1?:string;
    description_1?:string;
    title_2?:string;
    description_2?:string;
    title_3?:string;
    description_3?:string;
    title_4?:string;
    description_4?:string;
    title_5?:string;
    description_5?:string;
    checkButton:boolean


}
const CardComponent = (props:Props) => {
    const {
        title_1,
        description_1,
        title_2,
        description_2,
        title_3,
        description_3,
        title_4,
        description_4,
        title_5,
        description_5,
        checkButton }=props
  return (
    <View style={[gobalStyles.card,{paddingVertical:15}]}>
      {title_1 || description_1 !=undefined?(
        <SectionComponent>
            <TextComponent size={14}  text={title_1}/>
            <TextComponent size={14} styles={gobalStyles.desciptionText} text={description_1}/>
        </SectionComponent>
      ):undefined}
      {title_2 || description_2 !=undefined?(
        <SectionComponent>
            <TextComponent size={14}  text={title_2}/>
            <TextComponent size={14} styles={gobalStyles.desciptionText} text={description_2}/>
        </SectionComponent>
      ):undefined}
      {title_3 || description_3 !=undefined?(
        <SectionComponent>
            <TextComponent size={14}  text={title_3}/>
            <TextComponent size={14} styles={gobalStyles.desciptionText} text={description_3}/>
        </SectionComponent>
      ):undefined}
      {title_4 || description_4 !=undefined?(
        <SectionComponent>
            <TextComponent size={14}  text={title_4}/>
            <TextComponent size={14} styles={gobalStyles.desciptionText} text={description_4}/>
        </SectionComponent>
      ):undefined}
      {title_5 || description_5 !=undefined?(
        <SectionComponent>
            <TextComponent size={14}  text={title_5}/>
            {description_5!=null?(<Image style={{width:'100%',height:150}} src={description_5}/>):undefined}
        </SectionComponent>
      ):undefined}
      {checkButton?(
        <SectionComponent>
            <Button title='Chi tiết' />
        </SectionComponent>
      ):undefined}
    </View>
  )
}

export default CardComponent