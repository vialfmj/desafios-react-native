import { StyleSheet } from "react-native";
import { theme } from '../../constants'


const styles = StyleSheet.create({
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
        fontFamily: 'Regular',
    }
})

export default styles