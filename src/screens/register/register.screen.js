import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("LoginScreen", { potato: "cachorro" })
        }
      >
        <Text>Potato</Text>
      </TouchableOpacity>
    </View>
  );
};
