import { createStackNavigator } from "@react-navigation/stack";
import Contact from "../src/Contact";
import Profile from "../src/Profile";
import User from "../src/User";
import { Button } from "react-native-paper";
import Options from "../src/Option";


const Stack = createStackNavigator()
const StackNavigatorUser =()=>{


    return(
        <Stack.Navigator>
            <Stack.Screen name ="User" component={User}
                options={{
                    headerTitle:'Me',
                    headerTitleAlign:"center",
                }}
            />
            <Stack.Screen name ="Options" component={Options}/>
        </Stack.Navigator>
    )



}
export default StackNavigatorUser;