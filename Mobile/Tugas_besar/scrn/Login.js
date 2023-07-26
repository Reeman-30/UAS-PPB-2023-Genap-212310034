import React from 'react';
import { View, StyleSheet ,Text,Image} from 'react-native';
import Pass from '../component/Pass';
import LoginButton  from '../component/LoginButton';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.flexItem, { flex: 5 }]}>
        {/* Konten Flex 1 */}
        <Image
          source={require('../assets/heder.png')}
          style={{ width: 360, height: 200 }}
        />
      </View>
      <View style={[styles.flexItem, { flex: 9 }]}>
        {/* Konten Flex 2 */}
        <Pass />
      </View>
      <View style={[styles.flexItem, { flex: 6, marginBottom: -110 }]}>
        {/* Konten Flex 3 */}
        {/* <LoginButton /> */}
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
});

export default Login;
