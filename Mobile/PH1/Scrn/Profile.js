import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons'; // Import komponen ikon dari expo/vector-icons
import * as ImagePicker from 'expo-image-picker';
import HeadProf from '../Component/HeadProf';

class Profile extends Component {
  openCamera = async () => {
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

  navigateToSecurity = () => {
    this.props.navigation.navigate('Security'); 
    
  };
  navigateToHelp = () => {
    this.props.navigation.navigate('Help'); // Navigasi ke halaman Help
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flex1}>
          <HeadProf />
        </View>
        <View style={styles.flex2}>
          <View style={styles.buttonContainer}>
            <Text style={styles.identityText}>Identity</Text>
            <TouchableOpacity style={styles.button} onPress={this.openCamera}>
              <View style={styles.buttonContent}>
                <Ionicons name="card" size={24} color="black" style={styles.buttonIcon} />
                <Text style={styles.buttonText}>ID Verification</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.settingText}>Setting</Text>
            <TouchableOpacity style={styles.button} onPress={this.navigateToSecurity}>
              <View style={styles.buttonContent}>
                <Ionicons name="lock-closed-outline" size={24} color="black" style={styles.buttonIcon} />
                <Text style={styles.buttonText}>Security</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this.navigateToHelp}>
              <View style={styles.buttonContent}>
                <Ionicons name="help-circle-outline" size={24} color="black" style={styles.buttonIcon} />
                <Text style={styles.buttonText}>Help Center</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <View style={styles.buttonContent}>
                <Ionicons name="shield-outline" size={24} color="black" style={styles.buttonIcon} />
                <Text style={styles.buttonText}>Privacy</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -200,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 20,
  },
  identityText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'flex-start', // Mengatur teks berada di sebelah kiri
    paddingLeft: 10, // Memberi jarak antara ikon dan teks
    marginBottom: 2,
  },
  buttonContent: {
    flexDirection: 'row', // Menyusun ikon dan teks dalam satu baris
    alignItems: 'center', // Mengatur ikon dan teks berada di tengah secara vertikal
  },
  buttonIcon: {
    marginRight: 5, // Mengurangi jarak antara ikon dan teks
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
  settingText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
  },
});

export default Profile;
