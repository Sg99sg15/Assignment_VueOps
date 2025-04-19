import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Color } from '../../utils/colors'
import { BackIcon, BellIcon, CommentIcon, ThreeDotIcon, UserIcon } from '../../utils/Icons'
import images from '../../utils/Images'
import { Fonts } from '../../utils/fonts'
import { useNavigation } from '@react-navigation/native'
import { MS, S, VS } from '../../utils/scalingUtils'

const CommonHeader = ({
    logo = false,
    leftText = '',
    bellIcon = false,
    userIcon = false,
    commentIcon = false,
    threeDotIcon = false,
}) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            {logo ? (
                <Image source={images.logo} style={styles.logo} />
            ) : (
                <View style={styles.rowAlign}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <BackIcon />
                    </TouchableOpacity>
                    {leftText && (
                        <Text style={styles.leftText}>
                            {leftText}
                        </Text>
                    )}
                </View>
            )}
            <View style={styles.iconContainer}>
                {bellIcon && (
                    <TouchableOpacity style={styles.iconSpacing}>
                        <BellIcon />
                    </TouchableOpacity>
                )}
                {userIcon && (
                    <TouchableOpacity style={styles.iconSpacing}>
                        <UserIcon />
                    </TouchableOpacity>
                )}
                {commentIcon && (
                    <TouchableOpacity style={styles.iconSpacing}>
                        <CommentIcon color={Color.blackColor} />
                    </TouchableOpacity>
                )}
                {threeDotIcon && (
                    <TouchableOpacity style={styles.iconSpacing}>
                        <ThreeDotIcon />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default CommonHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: S(15),
        paddingVertical: VS(10),
        backgroundColor: Color.WHITE,
        borderBottomWidth: 1,
        borderColor: Color.borderColor,
    },
    logo: {
        width: S(75),
        height: VS(25),
        resizeMode: 'contain',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconSpacing: {
        paddingLeft: S(15),
    },
    rowAlign: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftText: {
        fontSize: MS(16),
        fontFamily: Fonts.RobotoMedium,
        lineHeight: VS(20),
        paddingLeft: S(15),
    },
})
