import { TouchableOpacity, View } from "react-native"
import { Divider, Icon, Text } from "react-native-paper"



const DetaiListItem = ({icon,label,value})=>{
    return(
        <TouchableOpacity>
            <View style={{flexDirection:'row',padding:10}}>
                <Icon source={icon} size={40}/>
                <View style={{marginLeft:10}}>
                    <Text variant="labelLarge">{label}</Text>
                    <Text>{value}</Text>
                </View>
            </View>
            <Divider/>
        </TouchableOpacity>
    )
}
export default DetaiListItem;