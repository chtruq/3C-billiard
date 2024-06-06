import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const BookingLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerTitle: "Đặt bàn",
          headerBackButtonMenuEnabled: true,
        }}
      />
      <Stack.Screen
        name="detail-appointment"
        options={{
          headerShown: true,
          headerTitle: "Đặt bàn",
        }}
      />
      <Stack.Screen
        name="confirmation-waiting"
        options={{
          headerShown: true,
          headerTitle: "Xác nhận",
        }}
      />
      <Stack.Screen
        name="user-info"
        options={{
          headerShown: true,
          headerTitle: "Thông tin yêu cầu",
        }}
      />
    </Stack>
  );
};

export default BookingLayout;
