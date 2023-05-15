

import { StyleSheet } from "react-native";
import { theme } from "../../constants";

export const style = StyleSheet.create({
    container:{
        borderWidth: 2,
        height: '100%',
        width: '30%',
        backgroundColor: theme.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: theme.tertiary
    }
})