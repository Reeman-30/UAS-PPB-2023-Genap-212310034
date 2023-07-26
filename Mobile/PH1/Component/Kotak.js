import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Camera from 'expo-camera';

const Kotak = () => {
  const openCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === 'granted') {
      const image = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        allowsEditing: false,
        aspect: [4, 3],
      });

      if (!image.cancelled) {
        console.log('Image URI:', image.uri);
        // Lakukan operasi dengan gambar sesuai kebutuhan Anda
      }
    } else {
      console.log('Camera permission denied');
    }
  };

  const handleInvoicePress = () => {
    openCamera();
    console.log('Tombol "Invoice" ditekan');
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/Durian.png')}
            style={styles.image}
          />
          <Text style={styles.text}>Kampung Durian Homestay</Text>
        </View>
        <View style={styles.orderContainer}>
          <Text style={styles.orderText}>Order ID: 213213213</Text>
          <View style={styles.horizontalLine} />
        </View>
        <Text style={styles.dateText}>17/06/2003 (1 Malam)</Text>
        <Image
          source={require('../assets/QR.png')}
          style={styles.imageQR}
        />
        <TouchableOpacity onPress={handleInvoicePress} style={styles.invoiceButton}>
          <Text style={styles.invoiceButtonText}>Scan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  box: {
    width: 300,
    height: 430, // Diperbarui agar menampung tombol "Invoice"
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: -20,
  },
  image: {
    width: 80,
    height: 80,
  },
  imageQR: {
    width: 200,
    height: 200,
    marginLeft: 40,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'left',
    marginLeft: -20,
  },
  orderContainer: {
    flexDirection: 'column',
    marginLeft: 20,
  },
  orderText: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'left',
  },
  horizontalLine: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginTop: 5,
  },
  descriptionText: {
    fontSize: 14,
    color: 'black',
    textAlign: 'left',
    marginLeft: 20,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'left',
    marginLeft: 20,
  },
  invoiceButton: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    backgroundColor: '#379237',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  invoiceButtonText: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Kotak;
