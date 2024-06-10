import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";

const BookingLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          headerBackButtonMenuEnabled: true,
          headerTitle: "Đặt bàn",
        }}
      />
    </Stack>
  );
};

export default BookingLayout;
