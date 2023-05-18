import { View } from "react-native"

import NavItem from "../navItem"
import { style } from './style'

const NavBar = ({ navigation }) => {
    
    return <>
        <View style={style.navbar}>

            <NavItem title={'Home'} navigation={navigation}/>
            <NavItem title={'Done'} navigation={navigation}/>
            <NavItem title={'No done'} navigation={navigation}/>
        </View>
    </>
}

export default NavBar