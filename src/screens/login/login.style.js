import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const text = {
  fontSize: 14,
};

const test = () => {
  if (width < 321) {
    return { width: 40 };
  } else {
    return { width: 100 };
  }
};

const style = StyleSheet.create({
  container: {
    ...text,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: '#1add',
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 100,
    height: 50,
  }
});

export default style;
