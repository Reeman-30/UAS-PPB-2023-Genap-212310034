import React from 'react';
import { View, StyleSheet, Image, ImageBackground, Text, ScrollView } from 'react-native';
import Chekin from '../Component/Chekin';
import Infohomestay from '../Component/Infohomestay';
import Ivent from '../Component/Ivent';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.flexItem, { flex: 5 }]}>
        {/* Konten Flex 1 */}
        <ImageBackground
          source={require('../assets/Logokosongan.png')}
          style={{ width: 360, height: 200 }}
          resizeMode="contain"
        >
          <Image
            source={require('../assets/Logonama.png')}
            style={styles.overlayImage}
            resizeMode="contain"
          />
          <Image
            source={require('../assets/profile.png')}
            style={styles.overlayImage1}
            resizeMode="contain"
          />
          <Text style={styles.overlayText}>Selamat datang Firza</Text>
        </ImageBackground>
      </View>
      <View style={[styles.flexItem, { flex: 8, marginBottom: 40,marginTop:50 }]}>
        {/* Konten Flex 2 */}
        <View style={styles.chekinContainer}>
          <Chekin />
        </View>
      </View>
      <View style={[styles.flexItem, { flex: 10, marginBottom: 3 }]}>
        {/* Konten Flex 3 */}
        <View style={styles.infoContainer}>
          <Infohomestay />
        </View>
      </View>
      <View style={[styles.flexItem, { flex: 10 }]}>
        {/* Konten Flex 4 */}
        <Ivent />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  flexItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayImage: {
    width: '70%',
    height: '30%',
    position: 'absolute',
    top: 25,
    left: 20,
    marginTop: 20,
  },
  overlayImage1: {
    width: '70%',
    height: '30%',
    position: 'absolute',
    top: 80,
    left: -70,
    marginTop: 20,
  },
  overlayText: {
    position: 'absolute',
    top: 100,
    left: 90,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 15,
  },
  chekinContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 40,
  },
});

export default Home;
