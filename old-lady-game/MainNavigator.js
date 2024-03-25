import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Game from './screens/Game';

const MainNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Game" component={Game} />
        </Stack.Navigator>
    )
}

export default MainNavigator;