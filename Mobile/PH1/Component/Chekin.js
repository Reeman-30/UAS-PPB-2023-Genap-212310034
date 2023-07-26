import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Detail from '../Scrn/Detail'
import Kotak from './Kotak'
import BlmChekin from './BlmChekin'

const Checkin = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Kotak'); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image
          source={require('../assets/Durian.png')}
          style={styles.buttonImage}
        />
        <Text style={styles.buttonText}>Check-in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    marginTop: -200,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#379237',
    paddingHorizontal: 65,
    paddingVertical: 2,
    borderRadius: 70,
    shadowColor: 'rgba(0, 0, 0, 0.9)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
    marginTop: -12,
    marginBottom:20,
  },
  buttonImage: {
    width: 80,
    height: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Checkin;
