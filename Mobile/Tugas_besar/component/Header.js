import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const Box = () => {
  return (
    <View style={styles.box}>
       
      <Text style={styles.text}>
        KAMPUNG DURIAN RANCAMAYA
</Text>
<Text style={styles .pp}>
Selamat datang di 
Kampung Durian
</Text>

<Text style={styles .pw}>
s
</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
  
    backgroundColor: '#258225',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 150,
    marginTop:-150,
  
    
  },
  text: {
    fontSize: 30,
    marginLeft: -30,
    color : 'white'
  },

  pp: {
    fontSize: 15,
    marginLeft: -30,
    color : 'white'
  },
  pw: {
    fontSize: 15,
    marginLeft: 20,
    color : '#258225'
  },
});

export default Box;
