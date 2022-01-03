import { View, Text, StyleSheet } from "react-native";

export function Main() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>Main page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#352F3D",
    alignItems: "center",
    justifyContent: "center",
  },
});
