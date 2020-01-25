//import liraries
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

// create a component
const HomeScreen = props => {
   return (
      <View style={styles.container}>
         <Button title="GO TO FRIEND" onPress={() => props.navigation.navigate('Friends')}/>
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
export default HomeScreen;
