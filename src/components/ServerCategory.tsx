import { View, TouchableOpacity, StyleSheet } from 'react-native';
import React, { cloneElement } from 'react';
import { WIDTH } from '../utils/functions';
import { Color } from '../utils/colors';
import { ServerCategoryList } from '../utils/data';
import { S } from '../utils/scalingUtils';

interface ServerCategoryProps {
    activeIconIndex: number;
    setActiveIconIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ServerCategory: React.FC<ServerCategoryProps> = ({ activeIconIndex, setActiveIconIndex }) => {
    return (
        <View style={styles.container}>
            {ServerCategoryList.map((IconComponent, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => setActiveIconIndex(index)}
                    style={[
                        styles.iconContainer,
                        {
                            borderBottomWidth: activeIconIndex === index ? 2 : 0,
                            borderColor: Color.primaryColor,
                        },
                    ]}
                >
                    {cloneElement(IconComponent, {
                        color: activeIconIndex === index ? Color.primaryColor : Color.valueColor,
                    })}
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: S(5),
    },
    iconContainer: {
        width: WIDTH / 7,
        height: WIDTH / 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ServerCategory;
