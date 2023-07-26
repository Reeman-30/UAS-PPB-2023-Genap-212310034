import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

class Security extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.settingText}>Password</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChangePass')}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
        <Text style={styles.settingText}>Account</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
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

export default function SecurityScreen() {
  const navigation = useNavigation();

  return <Security navigation={navigation} />;
}
