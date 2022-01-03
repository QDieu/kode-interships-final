import { View, Text, StyleSheet } from "react-native";

export function Bank() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>Bank page</Text>
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
