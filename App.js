import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native';
import concert from './assets/concert.png';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

export default function App() {

const [ticketNumber, setTicketNumber] = useState(0);
const [cost, setCost] = useState("");
const onPress = () => {
  setCost('Ticket Cost: $' + (ticketNumber * 99.99).toFixed(2));
}
  return (
    <View style = {styles.container}>

    <Text style = {styles.title}>Ticket Vault</Text>

     <TextInput 
      style = {styles.TxtInput}
      placeholder = "Number of Tickets"
      onChangeText={(val) => setTicketNumber(val)}
      keyboardType = 'numeric'
      />

      <TouchableOpacity
        onPress={onPress} 
        style={styles.button}>
          <Text style= {styles.buttonText}>Find the cost</Text>
      </TouchableOpacity>

      <Text style = {styles.txtOutput}> {cost} </Text>
      <Image source={concert}  style = {styles.picture} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

picture: {
  witdh: 305, 
  Height: 159,
},

title: {
  color: "black", 
  fontSize: 35, 
  marginBottom: 20,
},

button: {
  backgroundColor: "pink",
  padding: 10,
  borderRadius: 5,
  marginBottom :20,
},

buttonText: {
  fontSize:20, 
  Color: '#fff',

},

TxtInput: { 
  height: 40,
  width: 200,
  borderColor: 'gray',
  borderWidth: 1,
  marginBottom:20,
},
txtOutput: {
  fontSize: 20,
  marginBottom: 40,

}

});
