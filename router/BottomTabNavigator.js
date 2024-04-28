import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { View } from "react-native-reanimated/lib/typescript/Animated"
import Contact from "../src/Contact";
import Favorties from "../src/Favorites";
import User from "../src/User";
import StackNavigator from "./StackNavigator";
import StackNavigatorUser from "./StackNavigatorUser";

const Tab = createMaterialBottomTabNavigator()
const BottomTabNavigator =()=>{
    return(
        <Tab.Navigator
            screenOptions={{headerShown:false}}
            backBehavior="order"
        >
            <Tab.Screen name="StackNavigator" component={StackNavigator}
                options={{
                    title:"Contacts",
                    tabBarIcon: "format-list-bulleted"
                }}
            />
            <Tab.Screen name="Favorites" component={Favorties}
                options={{
                    tabBarIcon: "star-outline"
                }}
            />
            <Tab.Screen name="StackNavigatorUser" component={StackNavigatorUser}
                options={{
                    title:"User",
                    tabBarIcon: "account-outline"
                }}
            />
        </Tab.Navigator>
    )

}
export default BottomTabNavigator;