import * as React from 'react';
import PropTypes from 'prop-types';

import { View, TextInput, FlatList, StyleSheet, TouchableOpacity, Text } from "react-native";

const TextInputPicker = ({valuesList, maxItems, onChangeText}) => {
    const [filteredList, setFilteredList] = React.useState([]);
    const [selected, setSelected] = React.useState('');

    const filterValues = value => {
        let filterData = valuesList && valuesList?.length > 0 ?
            valuesList?.filter(data =>
                data?.toLowerCase()?.includes(value?.toLowerCase()),
            ) :
            [];
        const returnData = filterData.length < maxItems ? filterData : [];
        setFilteredList([...returnData]);
    };

    const onChangeInput = value => {
        filterValues(value);
        setSelected(value);
        onChangeText(value);
    }

    const onPress = (item) => {
        setSelected(item || '');
        setFilteredList([]);
        onChangeText(item || '');
    }
    
    return (
        <View style={styles.container}>
            <TextInput
                value={selected}
                style = {styles.input}
                onChangeText={onChangeInput}
            />
            { filteredList.length > 0 && <FlatList
                style={styles.list}
                data={filteredList}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity style={styles.touchable}
                            onPress={() => onPress(item)}>
                                <Text>
                                    {item || ''}
                                </Text>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={item => item}
            /> }
        </View>
    );
}

TextInputPicker.propTypes = {
    valuesList: PropTypes.array.isRequired,
    maxItems: PropTypes.number.isRequired,
    onChangeText: PropTypes.func.isRequired,
}

export default TextInputPicker;

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginHorizontal: 12,
        marginTop: 12,
        borderWidth: 1,
        padding: 10,
    },
    touchable: {
        height: 40,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginHorizontal: 12,
    },
    list: {
        maxHeight: 100,
    },
    container: {
        height: 150,
    },
  });