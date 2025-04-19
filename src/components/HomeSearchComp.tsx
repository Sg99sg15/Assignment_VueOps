import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { MenuIcon, SearchIcon } from '../utils/Icons'
import { Fonts } from '../utils/fonts'
import { Color } from '../utils/colors'
import { MS, S, VS } from '../utils/scalingUtils'

interface searchTypes {
    setSearch: Dispatch<SetStateAction<string>>;
    search: string;
}

const HomeSearchComp: FC<searchTypes> = ({ search, setSearch }) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputBox}>
                <SearchIcon />
                <TextInput
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                    style={styles.input}
                />
            </View>
            <TouchableOpacity style={styles.menuButton}>
                <MenuIcon />
            </TouchableOpacity>
        </View>
    )
}

export default HomeSearchComp

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputBox: {
        flexDirection: 'row',
        paddingVertical: VS(10),
        paddingHorizontal: S(10),
        borderRadius: S(8),
        borderWidth: 1,
        borderColor: Color.borderColor
    },
    input: {
        width: '80%',
        fontFamily: Fonts.RobotoRegular,
        fontSize: MS(12),
        paddingLeft: S(10),
        color: Color.darkTextColor
    },
    menuButton: {
        paddingRight: S(10)
    }
});