import {
  View,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
const SearchGroup = () => {
  return (
    <View className="flex-row justify-between p-4 items-center w-[90vw] mx-auto border border-gray-400 rounded-lg ">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex-row">
          <Feather name="search" size={24} color="gray" />
          <TextInput className="ml-2" placeholder="Tìm kiếm" />
        </View>
      </TouchableWithoutFeedback>
      <TouchableOpacity>
        <Image source={require("../../assets/filter.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchGroup;
