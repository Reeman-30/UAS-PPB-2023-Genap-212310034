import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';

class ChangePass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    };
  }

  handleChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  handlePressChangePassword = () => {
    // Implement your logic to change the password here
    const { currentPassword, newPassword, confirmPassword } = this.state;
    // Validate the inputs and perform the password change operation
    if (currentPassword && newPassword && confirmPassword) {
      if (newPassword === confirmPassword) {
        // Passwords match, proceed with changing the password
        console.log('Change password:', currentPassword, newPassword);
        // Add your logic to change the password
      } else {
        // Passwords do not match
        console.log('Passwords do not match');
      }
    } else {
      // Empty fields
      console.log('Please fill in all fields');
    }
  };

  render() {
    const { currentPassword, newPassword, confirmPassword } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Current Password"
          secureTextEntry
          value={currentPassword}
          onChangeText={(text) => this.handleChangeText('currentPassword', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="New Password"
          secureTextEntry
          value={newPassword}
          onChangeText={(text) => this.handleChangeText('newPassword', text)}
        />
        <Text style={styles.requirementText}>
          At least 8 characters | Contains a number
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={(text) => this.handleChangeText('confirmPassword', text)}
        />
        <TouchableOpacity style={styles.button} onPress={this.handlePressChangePassword}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 22,
  },
  requirementText: {
    marginBottom: 16,
    fontSize: 12,
    color: 'gray',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#379237',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  closeButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChangePass;
