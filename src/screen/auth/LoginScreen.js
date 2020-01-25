//import liraries
import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const LoginScreen = props => {
   return (
      <View style={styles.container}>
         <Button title="LOGIN" onPress={() => props.navigation.navigate('Dashboard') }/>
         <TouchableOpacity style={{ marginVertical: 10}} onPress={()=> props.navigation.navigate('Register')}>
            <Text style={styles.txt}>Register Here</Text>
         </TouchableOpacity>
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
   txt : {
      fontSize: 20,
      color:'blue',
   }
});

//make this component available to the app
export default LoginScreen;
