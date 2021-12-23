import React from 'react';
import {Easing} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as ReduxStoreProvider} from 'react-redux';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import {CourseListing, MainLayout} from './screens';
import store from './store';

const Stack = createSharedElementStackNavigator();
const options = {
  gestureEnabled: false,
  transitionSpec: {
    open: {
      animating: 'timing',
      config: {
        duration: 400,
        easing: Easing.inOut(Easing.ease),
      },
    },
    close: {
      animating: 'timing',
      config: {
        duration: 400,
        easing: Easing.inOut(Easing.ease),
      },
    },
  },
  cardStyleInterpolator: ({current: {progress}}) => {
    return {
      cardStyle: {opacity: progress},
    };
  },
};
const App = () => {
  return (
    <ReduxStoreProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            useNativeDriver: false,
          }}
          detachInactiveScreens={false}
          initialRouteName={'Dashboard'}>
          <Stack.Screen name="Dashboard" component={MainLayout} />
          <Stack.Screen
            name="CourseListing"
            component={CourseListing}
            options={() => options}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxStoreProvider>
  );
};

export default App;
