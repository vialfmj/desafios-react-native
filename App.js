


import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import TaskContextProvider from './src/components/context';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { HomeScreen, DoneScreen, NoDoneScreen } from './src/screens';
import { theme } from './src/constants';





const Stack = createNativeStackNavigator()

export default function App() {



  const [loaded] = useFonts({
    Regular: require('./assets/fonts/Montserrat-Regular.ttf'),
    SemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
  })


  if (!loaded) return <AppLoading />

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

          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </TaskContextProvider>
  </>

}


