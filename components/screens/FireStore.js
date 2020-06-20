import React ,{useState,useEffect} from 'react'
import {Text, StyleSheet, View} from 'react-native'
import firestore from "@react-native-firebase/firestore"


function FireStore(){


    const [work,setWork] = useState('')

    const getUser = async ()=>{
        const userDocument = await firestore().collection("todos").doc('zSqb5l23gkv9mPR9Xo1h').get()
        console.log(userDocument);
        
    }

    useEffect(()=>{
         const subscriber = firestore().collection("todos").doc('zSqb5l23gkv9mPR9Xo1h').onSnapshot(doc=>
            {
                setWork(doc.data().task)
            }

            )
       
    },[])
       
    return (
        <>
        <View style={styles.cintainer}>
             <Text>Udulaindunil lets do this with fileStroe {work}</Text>        
        </View>
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

