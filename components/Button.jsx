import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native";

const Button = ({ title, onSubmit, style }) => {
  return (
    <TouchableOpacity
      onPress={onSubmit}
      className="py-4 bg-primary rounded-3xl border-2"
    >
      <Text className="text-white text-base font-psemibold text-center">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
