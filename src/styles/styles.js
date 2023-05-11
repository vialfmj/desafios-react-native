import { StyleSheet } from "react-native";
import { theme } from "../constants";


export const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '100%',
      width: '100%',
      marginTop: 50,
      backgroundColor: theme.background
    },
    titleContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      height: '15%',
      width: '100%',
      backgroundColor: theme.primary,
    },
    titleText: {
      fontSize:25,
      color: theme.tertiary
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
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