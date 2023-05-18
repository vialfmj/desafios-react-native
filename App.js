


import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { ActivityIndicator, View } from 'react-native'

import TaskContextProvider from './src/components/context';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { HomeScreen, DoneScreen, NoDoneScreen } from './src/screens';
import { Loader } from './src/components';
import { theme } from './src/constants';





const Stack = createNativeStackNavigator()

export default function App() {



  const [loaded] = useFonts({
    Regular: require('./assets/fonts/Montserrat-Regular.ttf'),
    SemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
  })


  if (!loaded) return <Loader />

  return <>
    <TaskContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{
              title: 'TaskListApp',
              headerStyle: {
                backgroundColor: theme.primary,
                justifyContent: 'center'

              },
              headerTintColor: theme.secondary,
              headerTitleStyle: {
                fontFamily: 'SemiBold'
              },
            }} />
          <Stack.Screen
            name='Done'
            component={DoneScreen}
            options={{
              title: 'Done tasks',
              headerStyle: {
                backgroundColor: theme.primary,
              },
              headerTintColor: theme.secondary,
              headerTitleStyle: {
                fontFamily: 'SemiBold'
              },

            }} />
          <Stack.Screen
            name='No done'
            component={NoDoneScreen}
            options={{
              title: 'Undone tasks',
              headerStyle: {
                backgroundColor: theme.primary,
              },
              headerTintColor: theme.secondary,
              headerTitleStyle: {
                fontFamily: 'SemiBold'
              },

            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskContextProvider>
  </>

}


