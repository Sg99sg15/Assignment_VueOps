import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Color } from '../utils/colors'
import { Fonts } from '../utils/fonts'
import { FilterIcon } from '../utils/Icons'
import { S, VS } from '../utils/scalingUtils'

const ToggleComp = () => {
    return (
        <View style={styles.container}>
            <View style={styles.toggleWrapper}>
                <TouchableOpacity style={styles.allButton}>
                    <Text style={styles.allText}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.overdueButton}>
                    <Text style={styles.overdueText}>Overdue</Text>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>1</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <FilterIcon />
            </TouchableOpacity>
        </View>
    )
}

export default ToggleComp

const styles = StyleSheet.create({
    container: {
        paddingVertical: VS(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    toggleWrapper: {
        flexDirection: 'row',
        borderRadius: S(10),
        backgroundColor: Color.borderColor,
        paddingVertical: VS(5),
        paddingHorizontal: S(5),
        alignItems: 'center'
    },
    allButton: {
        paddingHorizontal: S(12),
        paddingVertical: VS(5),
        backgroundColor: Color.WHITE,
        borderRadius: S(5)
    },
    allText: {
        fontSize: S(12),
        fontFamily: Fonts.RobotoMedium,
        lineHeight: VS(15),
        color: Color.textColor
    },
    overdueButton: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    overdueText: {
        fontSize: S(14),
        fontFamily: Fonts.RobotoSemiBold,
        lineHeight: VS(20),
        paddingHorizontal: S(10),
        color: Color.darkTextColor
    },
    badge: {
        borderRadius: 50,
        marginRight: S(5),
        width: S(17),
        height: S(17),
        justifyContent: 'center',
        backgroundColor: Color.errorLightColor,
        alignItems: 'center'
    },
    badgeText: {
        fontSize: S(10),
        fontFamily: Fonts.RobotoMedium,
        color: Color.errorColor
    }
});
