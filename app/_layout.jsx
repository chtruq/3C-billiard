import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "PlusJakartaSans-Bold": require("../assets/static/PlusJakartaSans-Bold.ttf"),
    "PlusJakartaSans-BoldItalic": require("../assets/static/PlusJakartaSans-BoldItalic.ttf"),
    "PlusJakartaSans-ExtraBold": require("../assets/static/PlusJakartaSans-ExtraBold.ttf"),
    "PlusJakartaSans-ExtraBoldItalic": require("../assets/static/PlusJakartaSans-ExtraBoldItalic.ttf"),
    "PlusJakartaSans-ExtraLight": require("../assets/static/PlusJakartaSans-ExtraLight.ttf"),
    "PlusJakartaSans-ExtraLightItalic": require("../assets/static/PlusJakartaSans-ExtraLightItalic.ttf"),
    "PlusJakartaSans-Light": require("../assets/static/PlusJakartaSans-Italic.ttf"),
    "PlusJakartaSans-LightItalic": require("../assets/static/PlusJakartaSans-LightItalic.ttf"),
    "PlusJakartaSans-Medium": require("../assets/static/PlusJakartaSans-Medium.ttf"),
    "PlusJakartaSans-MediumItalic": require("../assets/static/PlusJakartaSans-MediumItalic.ttf"),
    "PlusJakartaSans-Regular": require("../assets/static/PlusJakartaSans-Regular.ttf"),
    "PlusJakartaSans-SemiBold": require("../assets/static/PlusJakartaSans-SemiBold.ttf"),
    "PlusJakartaSans-SemiBoldItalic": require("../assets/static/PlusJakartaSans-SemiBoldItalic.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(auth)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default RootLayout;
