
import { Text, TouchableHighlight, View } from "react-native"
import { style } from './style'

const NavItem = ({ title, navigation }) => {
    return <>

        <TouchableHighlight style={style.container}
            onPress={() => navigation.navigate(title)}>

            <Text style={style.title}>{title}</Text>
        </TouchableHighlight>

    </>
}

export default NavItem