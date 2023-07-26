import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Detail  from '../Scrn/Detail';

const Infohomestay = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Detail'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image
          source={require('../assets/tent_518823.png')} 
          resizeMode="contain" // Menggunakan resizeMode untuk menghindari pemotongan gambar
          style={styles.smallImage} 
        />
        <Text style={styles.text}>Information</Text>
      </View>
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={require('../assets/motel.jpeg')} 
          style={styles.image} 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  smallImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  image: {
    width: 300, // Atur lebar gambar sesuai kebutuhan
    height: 150, // Atur tinggi gambar sesuai kebutuhan
    borderRadius: 20, // Tambahkan border radius sesuai kebutuhan
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Infohomestay;
