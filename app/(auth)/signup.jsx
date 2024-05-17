import {
  View,
  Text,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TextField from "../../components/TextField";
import { Link, router } from "expo-router";

const SignUp = () => {
  const userIcon = require("../../assets/user.png");
  const mailIcon = require("../../assets/mail.png");
  const phoneIcon = require("../../assets/smartphone.png");
  const passwordIcon = require("../../assets/lock.png");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView className="mt-10">
          <View className="m-4">
            <View className="mt-10 items-center">
              <Image
                source={require("../../assets/3C-Icon.png")}
                className="w-[120px] h-[120px] "
              />
            </View>

            <View className="mt-4">
              <Text className="text-center text-primary font-pbold text-4xl mt-5">
                Get Started
              </Text>
            </View>

            <View className="mt-4">
              <TextField
                placeholder="Your full name"
                fieldName="Full name"
                onChange={(text) => {
                  console.log(text);
                }}
                value=""
                icon={userIcon}
              />
              <TextField
                placeholder="username@example.com"
                fieldName="Email"
                onChange={(text) => {}}
                value=""
                icon={mailIcon}
              />
              <TextField
                placeholder="0978654321"
                fieldName="Phone number"
                value=""
                icon={phoneIcon}
              />
              <TextField
                placeholder="************"
                fieldName="Password"
                value=""
                icon={passwordIcon}
              />
            </View>
            <View className="mt-4">
              {/* make the checkbox */}

              <Text className="text-xs">
                By checking the box, you agree to our <Text>Terms</Text> and{" "}
                <Text>Conditions</Text>.
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                router.navigate("/verify-email");
              }}
              className="mt-4 bg-primary py-4 rounded-full flex-row justify-center items-center"
            >
              <Text className="text-white font-pbold text-xl">Next</Text>
            </TouchableOpacity>
            <View className="flex-row justify-center mt-4">
              <Text className="font-pmedium text-lg">Already a member? </Text>
              <TouchableOpacity
                onPress={() => {
                  router.push("/signin");
                }}
              >
                <Text className="text-primary font-pbold text-lg">Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;
