import { createStackNavigator } from "@react-navigation/stack";
import Contact from "../src/Contact";
import Profile from "../src/Profile";
import Favorties from "../src/Favorites";


const Stack = createStackNavigator()
const StackNavigator =()=>{


    return(
        <Stack.Navigator
        backBehavior="order">
            <Stack.Screen name ="Contact" component={Contact}
                options={{
                    headerTitleAlign:"center",
                }}
            />
            <Stack.Screen name ="Profile" component={Profile}/>
            <Stack.Screen name ="Favorties" component={Favorties}
                options={{
                    headerTitleAlign:"center",
                }}
            />
        </Stack.Navigator>
    )





}
export default StackNavigator;