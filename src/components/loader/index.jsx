
import { View, ActivityIndicator } from "react-native"
import { style } from "./style"
import { theme } from '../../constants/theme'
const Loader = () => {
    return (
        <View style={style.container}>
            <ActivityIndicator size="large" color={theme.tertiary} />
        </View>
    )
}

export default Loader