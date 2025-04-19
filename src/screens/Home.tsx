import {
    FlatList,
    ListRenderItem,
} from 'react-native';
import React, { useState } from 'react';
import CommonHeader from '../components/common/CommonHeader';
import ScrollContainer from '../components/common/ScrollContainer';
import { Fonts } from '../utils/fonts';
import { categoryData, homeListData } from '../utils/data';
import HomeSearchComp from '../components/HomeSearchComp';
import CateComp from '../components/CateComp';
import TicketCardComp from '../components/TicketCardComp';
import ToggleComp from '../components/ToggleComp';
import {
    NavigationProp,
    useNavigation,
} from '@react-navigation/native';
import { RootStackParamList } from '../navigations/RouteData';
import { TicketItem } from '../utils/types';

const Home = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [search, setSearch] = useState<string>('');

    const handleClick = (item: TicketItem) => {
        navigation.navigate('TicketDetails', { item });
    };

    const renderItem: ListRenderItem<TicketItem> = ({ item }) => (
        <TicketCardComp item={item} handleClick={handleClick} />
    );

    return (
        <>
            <CommonHeader logo={true} bellIcon={true} userIcon={true} />
            <ScrollContainer>
                <HomeSearchComp search={search} setSearch={setSearch} />
                <CateComp />
                <FlatList
                    nestedScrollEnabled={true}
                    ListHeaderComponent={<ToggleComp />}
                    data={homeListData as TicketItem[]}
                    keyExtractor={(item) => item.id?.toString() ?? Math.random().toString()}
                    renderItem={renderItem}
                />
            </ScrollContainer>
        </>
    );
};

export default Home;
