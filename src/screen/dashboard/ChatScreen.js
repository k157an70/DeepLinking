//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const ChatScreen = props => {
   return (
      <View style={styles.container}>
         <Text style={{ fontSize: 20}}>{JSON.stringify(props.navigation, null, 2)}</Text>
      </View>
   );
};

// define your styles
const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   }
});

//make this component available to the app
export default ChatScreen;
