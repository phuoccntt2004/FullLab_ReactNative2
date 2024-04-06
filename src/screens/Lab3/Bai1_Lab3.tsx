import React, { useRef } from 'react';
import { ButtonComponent, ContainerComponent, SectionComponent } from '../../components';
import { gobalStyles } from '../../styles/gobalStyles';
import { Animated } from 'react-native';
import COLORS from '../../assets/colors/Colors';

const Bai1_Lab3 = ({navigation}:any) => {
  const animatedValue = useRef(new Animated.ValueXY({
    x: 0,
    y: 0,
  })).current;

  const handleMoveButtonPress = () => {
    animatedValue.setValue({
      x: 0,
      y: Math.random() * 255,
    });
  };

  return (
    <ContainerComponent>
      <SectionComponent styles= {{marginTop: 50}}>
        <ButtonComponent styles={{ height: 56 }} type='orange' text='Move' onPress={handleMoveButtonPress} color={COLORS.DARK_BLUE}/>
        <Animated.View style={[gobalStyles.box_100, { marginTop: animatedValue.y, backgroundColor: COLORS.HEX_BLACK }]} />
      </SectionComponent>
    </ContainerComponent>

  );
};


export default Bai1_Lab3;
