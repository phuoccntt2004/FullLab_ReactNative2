import React, { useState } from 'react';
import { Animated, ViewToken } from 'react-native';
import COLORS from '../../assets/colors/Colors';
import { SectionComponent } from '../../components';

type Props = {
    viewableItems: ViewToken[];
    item: {
        id: number;
    };
};

const ListItemAnim = (props: Props) => {
    const { viewableItems, item } = props
    const [opacity] = useState(new Animated.Value(0));
    const [scale] = useState(new Animated.Value(0.6));

    const isVisible = viewableItems
        .filter((item) => item.isViewable)
        .find((viewableItem) => viewableItem.item.id === item.id);

    if (isVisible) {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();

        Animated.timing(scale, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }

    return (
        <SectionComponent>
            <Animated.View
                style={[
                    {
                        height: 80,
                        width: '100%',
                        backgroundColor: COLORS.HEX_LIGHT_GRAY,
                        borderRadius: 15,
                        opacity: opacity,
                        transform: [{ scale: scale }],
                    },
                ]}
            />
        </SectionComponent>
    );
};
export default ListItemAnim;