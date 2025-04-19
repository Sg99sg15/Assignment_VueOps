import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { cloneElement, Dispatch, FC, SetStateAction } from 'react'
import { WIDTH } from '../utils/functions'
import { Color } from '../utils/colors'
import { Fonts } from '../utils/fonts'
import { DownArrowIcon } from '../utils/Icons'
import { S, VS } from '../utils/scalingUtils'

interface carditem {
    index: number,
    setActiveStatus: Dispatch<SetStateAction<number>>;
    activeStatus: number,
    item: {
        Icon: React.ReactElement<{ color?: string }>;
        label: string;
    };
}

const StatusCard: FC<carditem> = ({ index, setActiveStatus, activeStatus, item }) => {
    return (
        <TouchableOpacity key={index} onPress={() => setActiveStatus(index)}>
            <View style={[
                styles.cardContainer,
                {
                    borderColor: activeStatus === index ? Color.primaryColor : Color.borderColor,
                    backgroundColor: activeStatus === index ? Color.primaryColor : Color.WHITE
                }
            ]}>
                {cloneElement(item?.Icon, { color: activeStatus === index ? Color.WHITE : Color.primaryColor })}
                <Text style={[
                    styles.cardLabel,
                    {
                        color: activeStatus === index ? Color.WHITE : Color.valueColor
                    }
                ]}>
                    {item?.label}
                </Text>
            </View>
            <View style={[
                styles.arrowContainer,
                {
                    borderColor: activeStatus === index ? Color.primaryColor : Color.borderColor
                }
            ]}>
                <DownArrowIcon size={S(14)} color={activeStatus === index ? Color.primaryColor : Color.darkTextColor} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: WIDTH / 5,
        height: WIDTH / 5.3,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: S(7),
        borderTopLeftRadius: S(7),
        borderWidth: 1,
        marginTop: S(5),
    },
    cardLabel: {
        fontSize: S(12),
        fontFamily: Fonts.RobotoRegular,
        lineHeight: VS(18),
        marginTop: S(10)
    },
    arrowContainer: {
        borderRightWidth: 1,
        borderColor: Color.borderColor,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        paddingVertical: S(5),
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: S(7),
        borderBottomRightRadius: S(7)
    }
});

export default StatusCard;
