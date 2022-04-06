import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Home, ButtonScreen, TextScreen, InputScreen, DropdownScreen} from '../screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParameterList = {
  Home: undefined;
  Button: undefined;
  Text: undefined;
  Input: undefined;
  Dropdown: undefined;
};

const Stack = createNativeStackNavigator<RootStackParameterList>();

export const RootNavigator: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Button"
            component={ButtonScreen}
            options={{
              header: undefined
            }}
          />
          <Stack.Screen
            name="Text"
            component={TextScreen}
            options={{
              header: undefined
            }}
          />
          <Stack.Screen
            name="Input"
            component={InputScreen}
            options={{
              header: undefined
            }}
          />
          <Stack.Screen
            name="Dropdown"
            component={DropdownScreen}
            options={{
              header: undefined
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
