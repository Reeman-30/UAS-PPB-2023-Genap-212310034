import React, { useState } from 'react';
import { View, StyleSheet, Image, FlatList, Text, Modal, TouchableOpacity } from 'react-native';

const Ivent = () => {
  const imageList = [
    { id: 1, source: require('../assets/IVENTDUR.png'), description: 'Event Festival Durian', additionalText: 'Event Durian di Kampung Durian Rancamaya, Bogor, adalah acara yang menawarkan pengunjung kesempatan untuk menikmati durian segar langsung dari pohonnya. Pengunjung dapat memetik dan mencicipi berbagai jenis durian yang lezat. Acara ini juga menyediakan stan penjualan makanan durian dan aktivitas menarik seperti tur petik durian. Dengan suasana yang penuh kegembiraan, acara ini menjadi destinasi wajib bagi pecinta durian dan kuliner.' },
    { id: 2, source: require('../assets/120766.jpg'), description: 'Kaulinan Baheula Egrang', additionalText: 'Kaulinan Baheula Egrang adalah permainan tradisional Sunda yang menggunakan egrang, alat berupa tongkat panjang dengan pijakan kayu di tengahnya. Pemain harus menjaga keseimbangan saat melompat dan berjalan di atas egrang. Permainan ini melibatkan kecepatan, ketangkasan, dan mengajarkan nilai-nilai seperti ketekunan dan kerja sama. Kaulinan Baheula Egrang merupakan warisan budaya yang penting dan terus dilestarikan di Sunda.' },
    { id: 3, source: require('../assets/116541.jpg'), description: 'Gendang Pencak', additionalText: 'Gendang Pencak adalah instrumen musik tradisional Indonesia yang digunakan dalam seni bela diri pencak silat. Terbuat dari kayu dengan kulit binatang di kedua ujungnya, gendang ini memberikan ritme dan kekuatan kepada para penampil seni bela diri. Dimainkan oleh seorang pemain gendang yang terampil, gendang pencak menghasilkan berbagai suara dan ritme melalui pemukulan dengan tongkat atau tangan kosong.' },
    { id: 4, source: require('../assets/Food.jpeg'), description: 'Gambar 4', additionalText: 'Additional Text 4' },
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
      <View style={styles.header}>
        <Image
          source={require('../assets/vekalender.png')}
          resizeMode="contain"
          style={styles.smallImage}
        />
        <Text style={styles.text}>Events</Text>
      </View>
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
  },
  imageContainer: {
    alignItems: 'center',
    marginRight: 10,
  },
  box: {
    width: 200,
    height: 200,
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
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  description: {
    marginTop: 10,
    textAlign: 'center',
  },
  smallImage: {
    width: 30,
    height: 30,
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
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalImage: {
    width: 200,
    height: 200,
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

export default Ivent;
