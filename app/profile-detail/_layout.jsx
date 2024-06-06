import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const ProfileLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="booking-history"
        options={{
          headerShown: true,
          headerBackButtonMenuEnabled: true,
          headerTitle: "Đặt bàn",
        }}
      />
      {/* <Stack.Screen
        name="profile-detail"
        options={{
          headerShown: false,
        }}
      /> */}
    </Stack>
  );
};

export default ProfileLayout;
