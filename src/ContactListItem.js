import {View,TouchableOpacity } from "react-native"
import {Avatar, Divider, Text} from "react-native-paper"

const ContactListItem =({name,avatar,phone, onPress}) =>{

    return(
        <TouchableOpacity onPress={onPress} >
            <View style={{flexDirection:"row",padding:10}}>
                <Avatar.Image size={80} source={{uri :avatar}}/>
                <View>
                    <Text style={{marginLeft:10,fontSize:20}}>
                        {name}
                    </Text>
                    <Text style={{marginLeft:10,fontSize:20}}>
                        {phone}
                    </Text>
                </View>
            </View>
            <Divider/>
        </TouchableOpacity>
    )
}
export default ContactListItem;

