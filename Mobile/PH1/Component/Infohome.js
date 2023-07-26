import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const InfoHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.box}>
          <Image source={require('../assets/Vector (1).png')} style={styles.image} />
          <Text style={styles.title}>Box 1</Text>
        </View>
        <View style={styles.box}>
          <Image source={require('../assets/Vector (1).png')} style={styles.image} />
          <Text style={styles.title}>Box 2</Text>
        </View>
        <View style={styles.box}>
          <Image source={require('../assets/Vector (1).png')} style={styles.image} />
          <Text style={styles.title}>Box 3</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.box}>
          <Image source={require('../assets/Vector (1).png')} style={styles.image} />
          <Text style={styles.title}>Box 4</Text>
        </View>
        <View style={styles.box}>
          <Image source={require('../assets/Vector (1).png')} style={styles.image} />
          <Text style={styles.title}>Box 5</Text>
        </View>
        <View style={styles.box}>
          <Image source={require('../assets/Vector (1).png')} style={styles.image} />
          <Text style={styles.title}>Box 6</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  box: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default InfoHome;
