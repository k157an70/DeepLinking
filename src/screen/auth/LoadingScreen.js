//import liraries
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StatusBar, StyleSheet, Linking } from 'react-native';

// create a component
const LaodingScreen = props => {
   const [login, setLogin] = useState(true);

   useEffect(() => {
      let url = null;

      async function getInitUrl(){
         await Linking.getInitialURL().then(URL=>{
            url = URL;
            if(url && login){
               let friend = url.substring( url.lastIndexOf('/') + 1);
               props.navigation.navigate('Chat', { friend })
            }else{
               props.navigation.navigate( login ? 'Dashboard' : 'Auth')
            }
         })
      }
      
      getInitUrl();

   }, [])
   return (
      <View style={styles.container}>
         <ActivityIndicator/>
         <StatusBar barStyle="default"/>
      </View>
   );
};

// define your styles
const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
});

//make this component available to the app
export default LaodingScreen;
