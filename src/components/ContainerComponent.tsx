import { View, ImageBackground, ScrollView, StyleProp, ViewStyle, SafeAreaView } from 'react-native'
import React, { ReactNode } from 'react'
import { gobalStyles } from '../styles/gobalStyles';

interface Props {
  isImageBackground?: boolean;
  isScroll?: boolean;
  title?: string;
  children: ReactNode;
  back?: boolean; 
  styles?: StyleProp<ViewStyle> 
}
const ContainerComponent = (props: Props) => {

  const { isImageBackground, isScroll, title, children, back,styles } = props;

  const returnContainer = isScroll ? <ScrollView>{children}</ScrollView> : <View>{children}</View>;
  return isImageBackground ? (<ImageBackground>{returnContainer}</ImageBackground>) : (
    <SafeAreaView style = {[gobalStyles.container]}>
      <View style={styles}>
        {returnContainer}
      </View>
    </SafeAreaView>
  );
};

export default ContainerComponent;