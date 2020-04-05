import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export const ProfileScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("LoginScreen", { potato: "cachorro" })
        }
      >
        <Text>ProfileScreen</Text>
      </TouchableOpacity>
    </View>
  );
};
