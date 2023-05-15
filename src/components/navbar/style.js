import { StyleSheet } from "react-native";

import { theme } from "../../constants";

export const style = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: '2.5%',
    backgroundColor: theme.backgroundSecondary,
    height: '10%',
    width: '100%',
  },
})