import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-500 font-semibold text-4xl">3C-Billiard</Text>
      <Link href="/home">
        <Text className="font-bold underline">Go to home</Text>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}
