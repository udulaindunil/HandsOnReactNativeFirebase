import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { TextInput } from 'react-native-paper';

const AuthMain = () => {
  const [email,setEmail] = useState('');

  const [password, setPassword] = useState('');

  // auth()
  // .signInAnonymously()
  // .then(() => {
  //   console.log('User signed in anonymously');
  // })
  // .catch(error => {
  //   if (error.code === 'auth/operation-not-allowed') {
  //     console.log('Enable anonymous in your firebase console.');
  //   }

  //   console.error(error);
  // });
const signUp = ()=>{
  auth()
  .createUserWithEmailAndPassword(email,password)
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
}

const signIn = ()=>{
  auth().signInWithEmailAndPassword(email,password);
}

const signOut =()=>{
  auth()
  .signOut()
  .then(() => console.log('User signed out!'));
}
  
  
   // Set an initializing state whilst Firebase connects
   const [initializing, setInitializing] = useState(true);
   const [user, setUser] = useState();
 
   // Handle user state changes
   function onAuthStateChanged(user) {
     setUser(user);
     if (initializing) setInitializing(false);
   }
 
   useEffect(() => {
     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
     return subscriber; // unsubscribe on unmount
   }, []);
 
   if (initializing) return null;
 
   if (!user) {
     return (
       <View >
         <Text>Login</Text>
         <Button title="Log in User" onPress={()=>signIn()} />
         <TextInput label={'Email'} value={email} onChangeText={setEmail}/>
         <TextInput label={'Password'} value={password} onChangeText={setPassword}/>
         <Button  title="create User" onPress={()=>signUp()} />   
       </View>
     );
    }
 
   return (
     <View style={styles.container}>
       <Text>Welcome {user.email}</Text>
       <Button title="Log Out" onPress={()=>signOut()} />
     </View>
   );

      
};

const styles = StyleSheet.create({

  container:{
    flex: 1,
    alignItems: "center",
    justifyContent:"center" 
  }
});

export default AuthMain;
