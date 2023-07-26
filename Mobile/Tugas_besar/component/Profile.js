import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const Box = () => {
  return (
    <View style={styles.box}>
       <Image source={{ uri: 'https://cdn.idntimes.com/content-images/community/2022/12/fromandroid-9527be44da01486a86cb9b023d624084.jpg' }} style={styles.image} />
      <Text style={styles.text}>Desa Wisata Kampung Durian merupakan
sebuah kampung durian yang terkenal  sejak dahulu dikarenakan buah durian  yang  terkenal rasanya.

Terletak di selatan kota bogor yang berlokasi 
di kp. rancamaya Gg. Nasrifah Kp. legok petir
Rt.001/009 .</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 310,
    height: 450,
    backgroundColor: 'grey',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 150,
    marginTop:-150,
  
    
  },
  text: {
    fontSize: 15,
    marginLeft: 20,
  },
});

export default Box;
