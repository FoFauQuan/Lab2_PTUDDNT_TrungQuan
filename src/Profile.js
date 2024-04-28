import { useEffect, useState } from "react"
import { fetchRamdomContacts } from "../utility/api"
import { View } from "react-native"
import { Avatar, Icon, Text } from "react-native-paper"
import DetaiListItem from "./DetailListItem"


const Profile =({route})=>{
    // const [contacts,setContacts] =useState({})
    // useEffect(()=>{
    //     fetchRamdomContacts()
    //     .then(data =>{
    //         console.log(data)
    //         setContacts(data)
    //     })
    //     .catch(e=>console.log(e))
    // },[])
    const {name,avatar,phone,cell,email} = route.params.contact
    
    return(
        <View style={{flex:1}}>
            <View style={{
                flex:1,
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:"#ffafad"
            }}>
                <Avatar.Image source = {{uri: avatar}} size={100}/>
                <Text variant="headlineLarge" style={{color:"#000000"}}> {name} </Text>
                <Text>
                    <Icon source={"phone"}/>
                    {phone}
                </Text>
            </View>
            <View style={{flex:1}}>
                <DetaiListItem icon="email" label="Email" value={email}/>
                <DetaiListItem icon="phone" label="Work" value={phone}/>
                <DetaiListItem icon="cellphone" label="Personal" value={cell}/>
            </View>
        </View>
    )
}
export default Profile;