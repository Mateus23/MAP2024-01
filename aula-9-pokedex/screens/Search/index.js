import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchTab from './Tabs/SearchTab';

const Tab = createBottomTabNavigator();

const TabGroup = () => {
    // Adicionar 2 tabs, para termos 3 no total
    // Uma de busca por nome, outra busca por id e outra de busca por tipo
    return (
        <Tab.Navigator screenOptions={{ headerShown: false}}>
            <Tab.Screen name="SearchTab" component={SearchTab} />
        </Tab.Navigator>
    )
}

export default TabGroup;