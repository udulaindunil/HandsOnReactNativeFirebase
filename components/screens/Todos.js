import React from 'react'
import { View, Text } from 'react-native';
import { List } from 'react-native-paper';
import Swipeout from 'react-native-swipeout';
import firebase from '../../fb';

function Todos({doc}){

    const swipeSettinngs={
        autoClose:true,
        right:[{
            onPress: ()=>{
                deleted(doc.key)
            },
            type: 'Delete',
            text: 'Delete'
        }]
    }

    function deleted(key){
        // firebase.database().ref('tasks/').child(doc.key).remove()
        firebase.database().ref(`tasks/${key}`).remove();
    }

    async function toggleComplete(){
        await firebase.database().ref('tasks/').child(doc.key).update({complete:!doc.val().complete})
    } 

    return(
        <Swipeout {...swipeSettinngs}>

            <List.Item
                title={doc.val().task}
                description={doc.val().description}
                />
        </Swipeout>
    );

}

export default Todos;