import {
  View,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <SafeAreaView className="m-4 flex-1 h-[100vh]">
          <ScrollView className="mt-10 ">
            <View className="">
              <Text className="font-psemibold text-3xl text-primary">
                Gần xong rồi
              </Text>
            </View>
            <View className="mt-10">
              <Text className="text-base">
                Nhập 6 số được gửi về mail
                <Text className="text-base font-psemibold">
                  {" "}
                  username@example.com{" "}
                </Text>
                để xác nhận.
              </Text>
            </View>

            <View className="flex-row w-[70vw] justify-center mt-10 mx-auto">
              <TextInput
                value="1"
                className="bg-slate-300 w-[15%] mx-2 px-4 py-3 text-center rounded-lg"
              />
              <TextInput
                value="2"
                className="bg-slate-300 w-[15%] mx-2 px-4 py-3 text-center rounded-lg"
              />
              <TextInput
                value="3"
                className="bg-slate-300 w-[15%] mx-2 px-4 py-3 text-center rounded-lg"
              />
              <TextInput
                value="4"
                className="bg-slate-300 w-[15%] mx-2 px-4 py-3 text-center rounded-lg"
              />
              <TextInput
                value="5"
                className="bg-slate-300 w-[15%] mx-2 px-4 py-3 text-center rounded-lg"
              />
              <TextInput
                value="6"
                className="bg-slate-300 w-[15%] mx-2 px-4 py-3 text-center rounded-lg"
              />
            </View>
            <View className="justify-center items-center">
              <TouchableOpacity className="mt-10 bg-primary justify-center items-center w-[90vw] py-4 rounded-xl ">
                <Text className="font-pbold text-xl text-white">XÁC NHẬN</Text>
              </TouchableOpacity>
            </View>
            <View className="justify-center items-center mt-10">
              <Text className="font-pbold">Chưa nhận được code? Gửi lại.</Text>
              <Text className="text-gray-600">Gửi lại sau 00:30</Text>
            </View>
          </ScrollView>
          <TouchableOpacity
            onPress={() => {
              router.navigate("/signup");
            }}
            className="absolute bottom-5 bg-black rounded-full justify-center items-center w-[50px] h-[50px]"
          >
            <Entypo name="chevron-left" size={24} color="white" />
          </TouchableOpacity>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default VerifyEmail;
