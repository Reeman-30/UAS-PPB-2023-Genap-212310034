import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/LogoKAMDUR.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#379237',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginRight :-130,
  },
});

export default Loading;
