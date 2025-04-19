import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import {
    CalanderIcon,
    CommentIcon,
    FanIcon,
    HashIcon,
    LocationIcon,
    SendRequestIcon,
    TicketIcon
} from '../utils/Icons';
import { Color } from '../utils/colors';
import { Fonts } from '../utils/fonts';
import { TicketItem } from '../utils/types';
import { S, VS } from '../utils/scalingUtils';

const TicketCardComp = ({ item, handleClick }: { item: TicketItem, handleClick: (item: TicketItem) => void }) => {
    let BackgroundColor =
        item?.serverStatus == 'Overdue'
            ? Color.errorLightColor
            : item?.serverStatus == 'Update'
                ? Color.purpleLightColor
                : item?.serverStatus == 'New'
                    ? Color.blueLightColor
                    : Color.borderColor;

    let textColor =
        item?.serverStatus == 'Overdue'
            ? Color.errorColor
            : item?.serverStatus == 'Update'
                ? Color.purpleColor
                : item?.serverStatus == 'New'
                    ? Color.blueColor
                    : Color.WHITE;

    return (
        <TouchableOpacity onPress={() => handleClick(item)} style={styles.container}>
            <View style={styles.titleRow}>
                <Text style={styles.titleText}>{item?.title}</Text>
                <Text
                    style={[
                        styles.statusLabel,
                        {
                            backgroundColor: BackgroundColor,
                            color: textColor
                        }
                    ]}
                >
                    {item?.serverStatus}
                </Text>
            </View>

            <View style={[styles.row, { paddingVertical: VS(5) }]}>
                <View style={styles.halfRow}>
                    <Text>Status</Text>
                    <Text style={styles.statusBox}>{item?.status}</Text>
                </View>
                <View style={styles.halfRow}>
                    <Text>Priority</Text>
                    <View style={styles.priorityBox}>
                        <Text style={styles.dot}>{'\u2B24'}</Text>
                        <Text>{item?.Priority}</Text>
                    </View>
                    {item?.comment && (
                        <TouchableOpacity style={styles.commentIcon}>
                            <CommentIcon />
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.halfRow}>
                    <HashIcon />
                    <Text style={styles.valueText}>{item?.serverName}</Text>
                </View>
                <View style={styles.halfRow}>
                    <TicketIcon />
                    <Text style={styles.valueText}>{item?.serverTicket}</Text>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.halfRow}>
                    <FanIcon />
                    <Text style={styles.valueText}>{item?.serverFan}</Text>
                </View>
                <View style={styles.halfRow}>
                    <LocationIcon />
                    <Text style={styles.valueText}>{item?.location}</Text>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.halfRow}>
                    <SendRequestIcon />
                    <Text style={styles.valueText}>{item?.handlerName}</Text>
                </View>
                <View style={styles.halfRow}>
                    <CalanderIcon />
                    <Text style={styles.valueText}>{item?.time}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default TicketCardComp;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: Color.borderColor,
        borderRadius: S(8),
        paddingVertical: VS(12),
        paddingHorizontal: S(12),
        marginBottom: VS(15),
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleText: {
        color: Color.blackColor,
        fontSize: S(16),
        fontFamily: Fonts.RobotoMedium,
        lineHeight: VS(20),
        width: '70%'
    },
    statusLabel: {
        borderRadius: 50,
        paddingVertical: VS(3),
        paddingHorizontal: S(12),
        fontSize: S(12),
        fontFamily: Fonts.RobotoMedium,
        lineHeight: VS(18),
        alignSelf: 'flex-start'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: VS(2)
    },
    halfRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '49%'
    },
    statusBox: {
        borderWidth: 1,
        borderColor: Color.darkBorderColor,
        marginLeft: S(5),
        borderRadius: S(5),
        paddingVertical: VS(3),
        paddingHorizontal: S(5)
    },
    priorityBox: {
        borderWidth: 1,
        borderColor: Color.borderColor,
        marginLeft: S(5),
        borderRadius: 50,
        paddingVertical: VS(3),
        paddingHorizontal: S(5),
        flexDirection: 'row',
        alignItems: 'center'
    },
    dot: {
        fontSize: S(5),
        marginRight: S(5)
    },
    commentIcon: {
        marginLeft: S(10)
    },
    valueText: {
        fontSize: S(14),
        fontFamily: Fonts.RobotoRegular,
        paddingLeft: S(10),
        color: Color.valueColor,
        lineHeight: VS(20)
    }
});
