import React, { FC, ReactNode } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Color } from '../../utils/colors';
import { MS } from '../../utils/scalingUtils';


interface PropsTypes {
    children: ReactNode;
    style?: StyleProp<ViewStyle>
    containerStyle?: StyleProp<ViewStyle>
}
const ScrollContainer: FC<PropsTypes> = ({ children, style, containerStyle }) => {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={containerStyle}
                style={[styles.safeArea, style]}>
                <View style={styles.mainBox}>
                    {children}
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default ScrollContainer;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Color.WHITE,
    },
    mainBox: {
        flex: 1,
        padding: MS(16),
        backgroundColor: Color.WHITE,
    }
});
