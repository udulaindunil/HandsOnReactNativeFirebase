import React ,{useState,useEffect} from 'react'
import {Text, StyleSheet, View ,FlatList} from 'react-native'
import firestore from "@react-native-firebase/firestore"


function FireStore(){


    const [works,setWork] = useState()

    const getUser = async ()=>{
        const userDocument = await firestore().collection("todos").doc('zSqb5l23gkv9mPR9Xo1h').get()
        console.log(userDocument);
        
    }



    useEffect(()=>{     
        const subscriber = firestore().collection('todos').onSnapshot(querySnapshot=>{
            const works = [];
            querySnapshot.forEach(documentSnapshot=>{
                works.push({
                    ... documentSnapshot.data(),
                    key: documentSnapshot.id,
                });
            });
            setWork(works);
        });
        return () => subscriber();       
    },[])

      
    
    return (
        <>
        <FlatList
            data={works}
            keyExtractor={(item)=>item.key}
            renderItem={({ item }) => (
            <View style={{ height: 90, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>User ID: {item.key}</Text>
                <Text>Task: {item.task}</Text>
                <Text>Description: {item.description}</Text>
                <Text>Complete: {item.complete}</Text>
            </View>
            )}
            />
        </>
        );
}

export default FireStore;


const styles = StyleSheet.create({
    cintainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }

})

