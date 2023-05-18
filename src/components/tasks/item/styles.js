import { StyleSheet } from "react-native";
import { theme } from '../../../constants'
export const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#00FF00",
    color: '#FFFFFF',
    paddingHorizontal: 20,
    backgroundColor: theme.backgroundSecondary,
    fontSize: 30,
    marginTop: 50,
    width: 400,
    height: 80
  },
  textContainer: {
    width: '30%'
  },
  text: {
    fontSize: 20,
    fontFamily: 'SemiBold',
    color: theme.secondary
  }
});