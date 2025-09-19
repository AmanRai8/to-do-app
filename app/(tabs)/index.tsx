import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        Edit app/index.tsx to edit this screen.
      </Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>toggle the mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    gap: 20,
  },
  content: {
    color: "white",
  },
});
