import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const History = () => {
  const handleInvoicePress = () => {
    // Tambahkan logika yang ingin Anda lakukan saat tombol "Invoice" ditekan di sini
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
        <Text style={styles.descriptionText}>Kampung Durian Homestay</Text>
        <Text style={styles.dateText}>17/06/2003 (1 Malam)</Text>
        <TouchableOpacity onPress={handleInvoicePress} style={styles.invoiceButton}>
          <Text style={styles.invoiceButtonText}>Invoice</Text>
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
    height: 230, // Diperbarui agar menampung tombol "Invoice"
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginTop:10,
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

export default History;
``
