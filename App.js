import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as ReduxStoreProvider} from 'react-redux';

import {MainLayout} from './screens';
import store from './store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ReduxStoreProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Dashboard'}>
          <Stack.Screen name="Dashboard" component={MainLayout} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxStoreProvider>
  );
};

export default App;
