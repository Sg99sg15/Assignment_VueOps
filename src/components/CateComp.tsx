import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { categoryData } from '../utils/data'
import { Color } from '../utils/colors'
import { DownArrowIcon } from '../utils/Icons'
import { Fonts } from '../utils/fonts'
import { MS, S, VS } from '../utils/scalingUtils'

const CateComp = () => {
    return (
        <View style={styles.container}>
            {categoryData.map((item, index) => {
                return (
                    <TouchableOpacity key={index} style={styles.categoryBox}>
                        <Text style={styles.categoryText}>{item?.title}</Text>
                        <DownArrowIcon size={S(10)} />
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

export default CateComp

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: VS(15),
        borderBottomWidth: 1,
        borderColor: Color.borderColor,
        marginHorizontal: -S(16),
        paddingHorizontal: S(16),
    },
    categoryBox: {
        borderRadius: S(6),
        borderWidth: 1,
        borderColor: Color.darkBorderColor,
        paddingVertical: VS(7),
        paddingHorizontal: S(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: S(10),
    },
    categoryText: {
        fontSize: MS(12),
        fontFamily: Fonts.RobotoMedium,
        color: Color.textColor,
        paddingRight: S(7),
    },
})
