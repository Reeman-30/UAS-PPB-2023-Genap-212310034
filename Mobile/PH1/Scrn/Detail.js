import React, { useState } from 'react';
import { View, StyleSheet, Image, ImageBackground, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Fasilitas from '../Component/Fasilitas';
import Fas2 from '../Component/Fas2';

const Home = ({ navigation }) => {
  const [imageList, setImageList] = useState([
    { id: 1, source: require('../assets/motel.jpeg') },
    { id: 2, source: require('../assets/ankakontol.jpg') },
    { id: 3, source: require('../assets/Rename.png') },
    { id: 4, source: require('../assets/Food.jpeg') },
    // Tambahkan gambar-gambar lainnya sesuai kebutuhan
  ]);

  const renderImageItem = ({ item }) => (
    <ImageBackground
      source={item.source}
      style={{ width: 360, height: 200 }}
    />
  );

  return (
    <View style={styles.container}>
      <View style={[styles.flexItem, {  }]}>
        {/* Konten Flex 1 */}
        <FlatList
          data={imageList}
          renderItem={renderImageItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={[styles.flexItem, {  }]}>
        {/* Konten Flex 2 */}
        <View style={styles.textContainer}>
          <Text style={[styles.text1, { fontWeight: 'bold' }]}>Kampung Durian Homestay</Text>
          <Text style={[styles.text2, {}]}>
            Gg. Narsipah No.53, RT.04/RW.07, Rancamaya, Kec. Bogor Sel., Kota Bogor, Jawa Barat 16139
          </Text>
        </View>
      </View>

      <View style={[styles.flexItem, { flex: 10,marginTop:100}]}>
        {/* Konten Flex 3 */}
        {/* Tambahkan konten sesuai kebutuhan */}
        <Fasilitas />
      </View>
      
      <View style={[styles.flexItem, { flex: 10, marginBottom: 3 }]}>
        {/* Konten Flex 4 */}
        {/* Tambahkan konten sesuai kebutuhan */}
        <Fas2 />
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
    marginTop: 16,
    marginLeft: 14,
  },
  text2: {
    fontSize: 12,
    color: 'black',
    marginTop: 4,
    marginLeft: 14,
    marginRight: 25,
  },
});

export default Home;
