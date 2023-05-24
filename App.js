


import { useFonts } from 'expo-font';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

import TaskContextProvider from './src/components/context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { HomeScreen, DoneScreen, NoDoneScreen } from './src/screens';
import { Loader } from './src/components';
import { theme } from './src/constants';

const Tab = createBottomTabNavigator();

export default function App() {



  const [loaded] = useFonts({
    Regular: require('./assets/fonts/Montserrat-Regular.ttf'),
    SemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
  })


  if (!loaded) return <Loader />

  return <>
    <TaskContextProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Home'
          screenOptions={({ route }) => ({


            tabBarIcon: ({focused}) => {
              if(route.name === "Home") 
              return focused? <Entypo name="home" size={24} color={theme.secondary} />
              : <Entypo name="home" size={24} color={theme.backgroundSecondary} />



              if(route.name === "Done")
              return focused? <AntDesign name="checkcircle" size={24} color={theme.secondary} />
              : <AntDesign name="checkcircle" size={24} color={theme.backgroundSecondary} />
    
              if(route.name === "No Done")
              return focused? <AntDesign name="checkcircleo" size={24} color={theme.secondary} />
              : <AntDesign name="checkcircleo" size={24} color={theme.backgroundSecondary} />
              
            },

            headerShown: false,
            tabBarLabelStyle: {
              fontFamily: 'Regular',
              fontSize: 12
            },
            tabBarStyle: {
              backgroundColor: theme.background,
              borderColor: theme.primary,
            },
            tabBarActiveTintColor: theme.secondary,
            tabBarInactiveTintColor: theme.secondary,
            tabBarIconStyle: {
              fontSize: 22, 
            },

          })
          }
        >

          <Tab.Screen
            name='Home'
            component={HomeScreen} />
          <Tab.Screen
            name='Done'
            component={DoneScreen}
          />
          <Tab.Screen
            name='No Done'
            component={NoDoneScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </TaskContextProvider>
  </>

}


