import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const BookingLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="detail-appointment"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default BookingLayout;
