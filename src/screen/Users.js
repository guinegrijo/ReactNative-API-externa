import { View, FlatList, StyleSheet } from "react-native";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import api from "../services/axios"
import CardUser from "../components/CardUser";

export default function Users(){
    const [users, setUsers] = useState([])

    useEffect(()=>{
        getUser()
    }, [])

    async function getUser() {
        try {
            const response = await api.getUsers()
            setUsers(response.data)
        } catch (error) {
            console.log("Erro ao buscar dados:", error);
        }
    }

    const renderItem = ({item}) => <CardUser user={item}/>

    return(
        <View>
            <Header/>
            
            <FlatList
                data={users}
                renderItem={renderItem}
                keyExtractor={(item)=> item.id.toString()}
                contentContainerStyle={styles.listContent} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    listContent: {
        padding: 16,
        alignItems: 'center'
    }
})