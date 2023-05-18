import { StyleSheet } from "react-native";
import { theme } from '../../constants'


export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center",
        overflow: 'visible',
        height: '100%',
        width: '80%'
    },
    textInput: {
        height: 40,
        width: '70%',
        fontFamily: 'Regular',
        backgroundColor: theme.background,
        color: theme.secondary
    },
    button: {
        backgroundColor: theme.primary,
        height: 40,
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20,
        fontFamily: 'Regular',
    }
})

