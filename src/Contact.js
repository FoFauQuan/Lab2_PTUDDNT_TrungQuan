import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native"
import { fetchContacts } from "../utility/api";
import ContactListItem from "./ContactListItem";


const Contact =({navigation})=>{
    const [contacts,setContacts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [errorr,setErrorr] = useState(false);
    useEffect(()=>{
        fetchContacts().then(
            data =>{
                setContacts(data)
                setLoading(false);
                setErrorr(false)
            } 
        )
        .catch(e => {
            setLoading(false)
            setErrorr(true)
        })
    },[])
    const renderItem =({item})=>{
        return (
            <ContactListItem 
                name ={item.name} 
                avatar={item.avatar} 
                phone={item.phone}
                onPress={() => navigation.navigate("Profile",{contact:item})}/>
        )
    }
    return(
        <View style ={{flex:1,justifyContent:"center"}}>
            {loading && <ActivityIndicator color='blue' size='large'/> }
            {errorr && <Text> Error.... </Text>}
            {!loading && !errorr && (
                <FlatList
                    data ={contacts}
                    keyExtractor={(item)=> item.id}
                    renderItem={renderItem}
                />
            )}
        </View>
    )
}

export default Contact;