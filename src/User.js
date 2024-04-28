import { useEffect, useLayoutEffect, useState } from "react"
import { fetchUserContacts } from "../utility/api"
import { View } from "react-native"
import { Avatar } from "react-native-paper"
import { Text,Button } from "react-native-paper"



const User =({navigation})=>{
    const[User,setUser] = useState({})
    const[loading,setLoading] = useState(true)
    useEffect(()=>{
        fetchUserContacts()
        .then(data =>{
            console.log(data)
            setUser(data)
            setLoading(false)
        })
        .catch(e=>console.log(e))
    },[])
    const {name,avatar,phone} = User


    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: (props)=> <Button icon={"cog-outline"} {...props}
            labelStyle={{
                fontSize : 40,
                color:"#000000"
            }}
            onPress={()=> navigation.navigate("Options")}
        />
        })
    })
    return(
        <View style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#ffafad"
        }}>
            <Avatar.Image source={{uri:avatar}} size={150}/>
            <Text style={{
                fontSize:30,
                color:"#000000",
                fontWeight:"bold"
            }}>
                {name}
            </Text>
            <Text style={{
                fontSize:24,
                color:"#000000"
            }}>
                {phone}
            </Text>
        </View>
    )
}
export default User;