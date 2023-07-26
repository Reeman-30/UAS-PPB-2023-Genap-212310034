import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Nav from "./Nav";
// import Detail from "../scrn/Detail";
import Home from "../scrn/Home";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSignIn = () => {
    if (email === "212310024@Gmail.com" && password === "firzaazz") {
      setLoggedIn(true);
    } else {
      alert("Login failed. Please check your email and password.");
    }
  };

  if (loggedIn) {
    return <Home/>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.frm_row}>
        <Text style={styles.text_label}>Email </Text>
        <TextInput
          placeholder="nama@gmail.com"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.text_input}
          defaultValue={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.frm_row}>
        <Text style={styles.text_label}>Password</Text>
        <View style={{ ...styles.text_input, flexDirection: "row", justifyContent: "space-between" }}>
          <TextInput
            secureTextEntry={true}
            placeholder="Enter your password"
            autoCorrect={false}
            style={{ ...styles.text_input, borderWidth: 0, padding: 0, width: "90%" }}
            defaultValue={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.btn_signin} onPress={() => handleSignIn()}>
        <Text style={styles.btn_signin_text}>LogIn</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  frm_row: { marginBottom: 15 },
  text_label: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 16,
  },
  text_input: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: "grey",
  },
  btn_signin: {
    backgroundColor: "#379237",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  btn_signin_text: { color: "white", textAlign: "center", fontSize: 12 },
});
