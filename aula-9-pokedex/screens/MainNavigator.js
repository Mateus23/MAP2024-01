import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from './Search';
import Home from './Home';
import Pokemon from './Pokemon';
import Pokedex from './Pokedex';

const MainNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Pokemon" component={Pokemon} />
            <Stack.Screen name="Pokedex" component={Pokedex} />
        </Stack.Navigator>
    )
}

export default MainNavigator;