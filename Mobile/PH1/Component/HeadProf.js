import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HeadProf = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Logokosongan.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.infoContainer}>
        <Image
          source={require('../assets/profile.png')}
          style={styles.profileImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.info}>Firza azzhara</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.info1}>212310024@gmail.com</Text>
      </View>
      {/* Tambahkan informasi profil lainnya sesuai kebutuhan */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: -17,
    width: 460,
    height: 200,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 100,
    marginLeft: -100,
    marginTop: -40,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  info: {
    fontSize: 25,
    marginTop: -60,
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  info1: {
    fontSize: 12,
    marginTop: -30,
    color: 'white',
    marginLeft: -40,
  },
});

export default HeadProf;
