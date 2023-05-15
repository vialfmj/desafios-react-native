
import { Text, TouchableHighlight, View } from "react-native"
import { style } from './style'

const NavItem = ({ title, handler }) => {
    return <>

        <TouchableHighlight style={style.container}
            onPress={() => handler(title.toLowerCase())}>

            <Text style={style.title}>{title}</Text>
        </TouchableHighlight>

    </>
}

export default NavItem