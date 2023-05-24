import { StyleSheet } from "react-native";
import { theme } from "../constants";


export const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '100%',
      width: '100%',
      marginTop: 40,
      backgroundColor: theme.background
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 20,
      backgroundColor: '#0000FF',
      height:'10%',
      width: '100%',
      backgroundColor: theme.backgroundSecondary
    },
    tasksListContainer: {
      height: '60%',
      overflow: 'scroll'
    }
  });