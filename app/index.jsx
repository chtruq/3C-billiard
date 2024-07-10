import { Link, SplashScreen, router, useFocusEffect } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const bg = require("../assets/home.png");

  useFocusEffect(() => {
    setTimeout(() => {
      router.replace("/signin");
    }, 1000);
  });

  return (
    <View className="flex-1 items-center justify-center">
      <ImageBackground
        source={bg}
        resizeMode="contain"
        className="w-[100vw] h-[100vh]"
      ></ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}
