import {
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";

const TextField = ({
  placeholder,
  icon,
  fieldName,
  inputStyle,
  onChange,
  value,
}) => {
  return (
    <View className="mt-2">
      <Text className="text-lg text-gray-500">{fieldName}</Text>
      <View className="border-b-2 border-gray-300 w-[100%] flex-row justify-between">
        <TextInput
          placeholder={placeholder}
          onChangeText={onChange}
          value={value}
          className="text-lg pt-3 w-[90%]"
        />
        <Image source={icon} className="mt-4" />
      </View>
    </View>
  );
};

export default TextField;
