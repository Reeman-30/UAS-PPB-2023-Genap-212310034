import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const Help = () => {
  const handleButton1Press = () => {
    Linking.openURL('whatsapp://send?phone=088973803592'); 
  };

  const handleButton2Press = () => {
    Linking.openURL('mailto:Kampungdurianrancamaya@gmail.com'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi, how can we help you</Text>
      <Text style={styles.text1}>Let us know if you need any support. We're here to help and assist your journey.</Text>
      <TouchableOpacity style={styles.button} onPress={handleButton1Press}>
        <Text style={styles.buttonText}>Chat via WhatsApp</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleButton2Press}>
        <Text style={styles.buttonText}>Send us an email</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 20,
  },
  text1: {
    fontSize: 15,
    marginBottom: 20,
    marginLeft: 20,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Help;
