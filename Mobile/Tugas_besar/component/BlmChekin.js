import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const BlmChekin = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Blmresep.png')} style={styles.image} />
      <Text style={styles.text}>Anda Belum Reservasi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BlmChekin;
