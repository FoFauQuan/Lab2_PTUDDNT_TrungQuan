import { NavigationContainer } from "@react-navigation/native";
import"react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import BottomTabNavigator from "./router/BottomTabNavigator";


const App=()=>{
    return (
        <NavigationContainer>
            <PaperProvider>
                <BottomTabNavigator/>
            </PaperProvider>
        </NavigationContainer>

    )
}
export default App;