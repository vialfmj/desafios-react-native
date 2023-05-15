import { View } from "react-native"

import NavItem from "../navItem"
import { style } from './style'

const NavBar = ({ handler }) => {
    return <>
        <View style={style.navbar}>

            <NavItem title={'Home'} handler={handler}/>
            <NavItem title={'Done'} handler={handler}/>
            <NavItem title={'No done'} handler={handler}/>
        </View>
    </>
}

export default NavBar