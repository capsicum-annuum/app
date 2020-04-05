import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";

import Style from "./login.style";
import style from "./login.style";

export const LoginScreen = ({ text, navigation, route }) => {
  const [username, setUsername] = useState("");
  const [potato, setPotato] = useState("");

  

  return (
    <View style={Style.container}>
      <Text>{potato}</Text>
      <TextInput
        placeholder="Username"
        style={style.input}
        onChangeText={setUsername}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeTabs")}
        style={style.button}
      >
        <Text>Potato</Text>
      </TouchableOpacity>
    </View>
  );
};
