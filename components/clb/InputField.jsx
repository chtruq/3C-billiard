import { View, Text, TextInput } from "react-native";
import React from "react";

const InputField = ({ title, value, onChange, className }) => {
  return (
    <View className="mt-2">
      <TextInput
        className="border border-gray-600 rounded-md p-2 w-full text-base items-center "
        placeholder={title}
        value={value}
        onChangeText={(text) => onChange(text)}
      />
    </View>
  );
};

export default InputField;
