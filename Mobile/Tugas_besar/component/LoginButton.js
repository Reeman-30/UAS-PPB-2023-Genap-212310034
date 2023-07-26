import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const LoginButton = ({ onPress }) => {
  return (
    <View style={styles.container}>
       
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image
          source={require('../assets/Google.png')} // Ganti dengan path gambar yang sesuai
          style={styles.buttonImage}
        />
        <Text style={styles.buttonText}>Masuk menggunakan Google</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    marginTop :-140,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.9)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonImage: {
    width: 20, // Atur lebar gambar sesuai kebutuhan
    height: 20, // Atur tinggi gambar sesuai kebutuhan
    marginRight: 10, // Atur jarak antara gambar dengan teks
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default LoginButton;
