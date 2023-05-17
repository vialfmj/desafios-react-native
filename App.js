
import { useState } from 'react';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { styles } from './src/styles/styles'

import TaskListContainer from './src/components/tasks/container';
import TaskInput from './src/components/input';
import NavBar from './src/components/navbar';

export default function App() {


  const [tasks, setTasks] = useState([])
  const [actualScreen, setActualScreen] = useState("home")

  const [loaded] = useFonts({
    Regular: require('./assets/fonts/Montserrat-Regular.ttf'),
    SemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
  })



  const navbarTouchedHandler = (screen) => {
    setActualScreen(screen)
  }

  if(!loaded) return <AppLoading/>


  if (actualScreen === 'home') return (

    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>TaskListApp</Text>
      </View>
      <Text>{actualScreen}</Text>
      <NavBar handler={navbarTouchedHandler} />
      <View style={styles.inputContainer}>
        <TaskInput
          tasks={tasks}
          setTasks={setTasks} />
      </View>
      <View style={styles.tasksListContainer}>
        <TaskListContainer
          tasks={tasks}
          setTasks={setTasks}
          filter={'none'}
        />
      </View>

    </View>
  );

  if (actualScreen === 'done') return (


    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>TaskListApp</Text>
      </View>
      <Text>{actualScreen}</Text>
      <NavBar handler={navbarTouchedHandler} />
      <View style={styles.tasksListContainer}>
        <TaskListContainer
          tasks={tasks}
          setTasks={setTasks}
          filter={'done'}
        />
      </View>

    </View>
  );
  if (actualScreen === 'no done') return (


    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>TaskListApp</Text>
      </View>
      <Text>{actualScreen}</Text>
      <NavBar handler={navbarTouchedHandler} />
      <View style={styles.tasksListContainer}>
        <TaskListContainer
          tasks={tasks}
          setTasks={setTasks}
          filter={'nodone'}
        />
      </View>

    </View>
  );
}


