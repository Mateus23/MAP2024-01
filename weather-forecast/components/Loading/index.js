import { View, ActivityIndicator, StyleSheet } from "react-native";

const Loading = ({height, width}) => {
    return (
        <View style={{ ...styles.container, height, width}}>
            <ActivityIndicator size="large"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Loading;