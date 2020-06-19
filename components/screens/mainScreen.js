import React ,{useState,useEffect} from 'react'
import {Text} from 'react-native'
import { Appbar,TextInput,Button } from 'react-native-paper'
import firebase from '../../fb'

function Todo(){

    const [task,setTask] = useState('');
    const [description,setDescription] = useState('')

    const db = firebase.database().ref()

    // useEffect(()=>{
    //     return db.on('value',(snapshot)=>{
    //         console.log(snapshot) 
    //     })
    // })




    async function addTask(){
        db.push({
            task: task,
            description: description,
            complete: false
        })
        setTask('');
        setDescription('');
    }

    return (
        <>
        <Appbar>
            <Appbar.Content title={"Task App"}/>
        </Appbar>
        <Text>Task: {task}</Text>
        <Text>Description: {description}</Text>
        <TextInput label={'new task'} value={task} onChangeText={setTask}/>
        <TextInput label={'Description'} value={description} onChangeText={setDescription}/>
        <Button onPress={()=>{addTask()}}>Add task</Button>
        </>
        );
}

export default Todo;


