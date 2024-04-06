import React, { useState } from 'react';
import { FlatList, ViewToken } from 'react-native';
import { ContainerComponent } from '../../components';
import ListItemAnim from './ListItemAnim';

const Bai2_Lab3 = () => {
    const [viewableItems, setViewableItems] = useState<ViewToken[]>([]);
    const data = new Array(50).fill(0).map((_, index) => ({ id: index }));


    return (
        <ContainerComponent>
            <FlatList
                data={data}
                contentContainerStyle={{ paddingTop: 15 }}
                onViewableItemsChanged={({ viewableItems: vItems }) => {
                    setViewableItems(vItems);
                }}
                renderItem={({ item }) => {
                    return <ListItemAnim item={item} viewableItems={viewableItems} />;
                }}
            />
        </ContainerComponent>
    );
};

export default Bai2_Lab3;
