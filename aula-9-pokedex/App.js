import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './screens/MainNavigator';
import { Provider } from 'react-redux';
import store from './reducers/store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
