import React, { useState } from 'react';
import { View, StyleSheet, Image, FlatList, Text, Modal, TouchableOpacity } from 'react-native';

const Fas2 = () => {
  const imageList = [
    { id: 1, source: require('../assets/Wifi.png'), description: 'Wifi', additionalText: '.' },
    { id: 2, source: require('../assets/warung.png'), description: 'Tempat makan', additionalText: '.' },
    { id: 3, source: require('../assets/Sarapan.png'), description: 'Gratis sarapan', additionalText: '.' },
    // Tambahkan gambar-gambar lainnya sesuai kebutuhan
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedAdditionalText, setSelectedAdditionalText] = useState('');

  const renderImageItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleImagePress(item)}>
      <View style={styles.imageContainer}>
        <View style={styles.box}>
          <Image source={item.source} style={styles.image} />
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const handleImagePress = (item) => {
    setSelectedImage(item.source);
    setSelectedAdditionalText(item.additionalText);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={imageList}
        renderItem={renderImageItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <Modal visible={modalVisible} transparent>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalBackground} activeOpacity={1} onPress={handleCloseModal} />
          <View style={styles.modalContent}>
            <Image source={selectedImage} style={styles.modalImage} resizeMode="contain" />
            <Text style={styles.additionalText}>{selectedAdditionalText}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginRight: 10,
    
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  description: {
    marginTop: 10,
    textAlign: 'center',
  },
  smallImage: {
    width: 20,
    height: 20,
    marginLeft: 30,
    marginRight: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  modalBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalImage: {
    width: 200,
    height: 200,
    padding: 20,
    borderRadius: 10,
  },
  additionalText: {
    marginTop: 20,
    fontSize: 16,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#379237',
    borderRadius: 10,
    width: 90,
    height: 40,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Fas2;
