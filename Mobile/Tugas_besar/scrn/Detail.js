import React from 'react';
import { View, StyleSheet, Image, ImageBackground, Text } from 'react-native';
import { usenavigation } from '@react-navigation/native';


const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.flexItem, { flex: 5 }]}>
        {/* Konten Flex 1 */}
        <ImageBackground
          source={require('../assets/motel.jpeg')}
          style={{ width: 360, height: 200 }}
        />
      </View>

      <View style={[styles.flexItem, { flex: 9 }]}>
        {/* Konten Flex 2 */}
        <View style={styles.textContainer}>
          <Text style={[styles.text1, { fontWeight: 'bold' }]}>Kampung Durian Homestay</Text>
          <Text style={[styles.text2, {  }]}>Gg. Narsipah No.53, RT.04/RW.07, Rancamaya, Kec. Bogor Sel., Kota Bogor, Jawa Barat 16139</Text>
        </View>
      </View>

      <View style={[styles.flexItem, { flex: 5 }]}>
        {/* Konten Flex 3 */}
       
      </View>
    </View>
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
    width: 300,
    height: 70,
    position: 'absolute',
    marginTop: 55,
    right: 15,
  },
  textContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  text1: {
    fontSize: 20,
    color: 'black',
    marginTop:26,
    marginLeft:14,
  },
  text2: {
    fontSize: 12,
    color: 'black',
    marginTop:4,
    marginLeft:14,
    marginRight:25,
  }

});

export default Home;
