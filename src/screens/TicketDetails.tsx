import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { cloneElement, useState } from 'react';
import CommonHeader from '../components/common/CommonHeader';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigations/RouteData';
import { Color } from '../utils/colors';
import { Fonts } from '../utils/fonts';
import ScrollContainer from '../components/common/ScrollContainer';
import images from '../utils/Images';
import { WIDTH } from '../utils/functions';
import { StatusData } from '../utils/data';
import ServerCategory from '../components/ServerCategory';
import StatusCard from '../components/StatusCard';
import { S, VS } from '../utils/scalingUtils';

type TicketDetailsRouteProp = RouteProp<RootStackParamList, 'TicketDetails'>;

const TicketDetails = () => {
    const route = useRoute<TicketDetailsRouteProp>();
    const [activeIconIndex, setActiveIconIndex] = useState<number>(0);
    const [activeStatus, setActiveStatus] = useState<number>(0);
    const ITEM = route.params.item;
    console.log(route.params, 'Ticket Details Params');

    let BackgroundColor =
        ITEM?.serverStatus == 'Overdue'
            ? Color.errorLightColor
            : ITEM?.serverStatus == 'Update'
                ? Color.purpleLightColor
                : ITEM?.serverStatus == 'New'
                    ? Color.blueLightColor
                    : Color.borderColor;

    let textColor =
        ITEM?.serverStatus == 'Overdue'
            ? Color.errorColor
            : ITEM?.serverStatus == 'Update'
                ? Color.purpleColor
                : ITEM?.serverStatus == 'New'
                    ? Color.blueColor
                    : Color.WHITE;

    return (
        <>
            <CommonHeader
                logo={false}
                leftText={ITEM?.serverName}
                commentIcon={true}
                threeDotIcon={true}
            />
            <ScrollContainer>
                <View style={styles.titleRow}>
                    <Text style={styles.titleText}>{ITEM?.title}</Text>
                    <Text
                        style={[
                            styles.statusLabel,
                            {
                                backgroundColor: BackgroundColor,
                                color: textColor
                            }
                        ]}
                    >
                        {ITEM?.serverStatus}
                    </Text>
                </View>
                <ServerCategory activeIconIndex={activeIconIndex} setActiveIconIndex={setActiveIconIndex} />
                <Text style={styles.sectionLabel}>Status</Text>
                <View style={styles.cardRow}>
                    {StatusData.map((item, index) => {
                        return (
                            <StatusCard
                                key={index}
                                index={index}
                                setActiveStatus={setActiveStatus}
                                activeStatus={activeStatus}
                                item={item}
                            />
                        )
                    })}
                </View>
                <Text style={styles.sectionLabel}>Photos/Videos</Text>
                <View style={styles.mediaContainer}>
                    {[0, 1, 2].map((_, idx) => {
                        return (
                            <Image key={idx} source={images.sampleImage} style={styles.mediaItem} />
                        )
                    })}
                </View>
                <Text style={styles.sectionLabel}>Description</Text>
                <Text style={styles.descriptionText}>Occupant has moved out, and deep cleaning is required to prepare the space for the next tenant. Tasks include thorough cleaning of all surfaces, carpets, windows, bathrooms, kitchen appliances, and removal of any remaining debris.</Text>
                <Text style={styles.sectionLabel}>Priority</Text>
                <View style={styles.priorityBox}>
                    <Text style={styles.dot}>{'\u2B24'}</Text>
                    <Text>{ITEM?.Priority}</Text>
                </View>
                <Text style={styles.sectionLabel}>Location</Text>
                <Text style={styles.locationText}>DELTA ROOM 230</Text>
            </ScrollContainer>
        </>
    );
};

export default TicketDetails;

const styles = StyleSheet.create({
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleText: {
        color: Color.blackColor,
        fontSize: S(20),
        fontFamily: Fonts.RobotoRegular,
        lineHeight: VS(25),
        width: '70%'
    },
    statusLabel: {
        borderRadius: S(50),
        paddingVertical: VS(5),
        paddingHorizontal: S(10),
        fontSize: S(12),
        fontFamily: Fonts.RobotoMedium,
        lineHeight: VS(18),
        alignSelf: 'flex-start'
    },
    priorityBox: {
        borderWidth: 1,
        borderColor: Color.borderColor,
        alignSelf: 'flex-start',
        borderRadius: S(50),
        paddingVertical: VS(3),
        paddingHorizontal: S(5),
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: VS(3)
    },
    dot: {
        fontSize: S(5),
        marginRight: S(5)
    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: VS(5),
    },
    actionCard: {
        width: WIDTH / 5,
        height: WIDTH / 5.3,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: S(7),
        borderTopLeftRadius: S(7),
        borderWidth: 1,
        borderColor: Color.borderColor,
        marginTop: VS(5),
    },
    cardLabel: {
        fontSize: S(12),
        fontFamily: Fonts.RobotoRegular,
        lineHeight: VS(18),
        color: Color.valueColor,
        marginTop: VS(10),
    },
    arrowContainer: {
        borderRightWidth: 1,
        borderColor: Color.borderColor,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        paddingVertical: VS(5),
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: S(7),
        borderBottomRightRadius: S(7),
    },
    sectionLabel: {
        fontSize: S(14),
        fontFamily: Fonts.RobotoRegular,
        lineHeight: VS(20),
        paddingTop: VS(15),
        color: Color.darkTextColor
    },
    mediaContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    mediaItem: {
        width: WIDTH / 3.7,
        height: WIDTH / 3.7,
        borderRadius: S(5),
        marginTop: VS(10),
        marginRight: S(10)
    },
    descriptionText: {
        fontSize: S(16),
        fontFamily: Fonts.RobotoRegular,
        lineHeight: VS(24),
        paddingVertical: VS(5),
        color: Color.valueColor
    },
    locationText: {
        fontSize: S(14),
        fontFamily: Fonts.RobotoRegular,
        marginTop: VS(5),
        alignSelf: 'flex-start',
        lineHeight: VS(20),
        backgroundColor: Color.borderColor,
        borderRadius: S(50),
        paddingVertical: VS(7),
        paddingHorizontal: S(10)
    }
});
