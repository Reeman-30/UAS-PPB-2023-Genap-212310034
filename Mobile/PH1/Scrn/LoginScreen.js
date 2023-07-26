import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validasi email dan password
    if (email === '123' && password === '123') {
      navigation.navigate('Home');
    } else {
      alert('Email atau password salah');
    }
  };

  return (
    <View>
      <View>
        <Image
          source={require('../assets/heder.png')}
          style={{ width: 360, height: 200 }}
        />
      </View>
      <View style={styles.container}>
        {/* Konten tampilan login */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
    marginTop: 90,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginVertical: 10,
    width: '100%',
    borderRadius: 22,
  },
  button: {
    width: '100%',
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 22,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;