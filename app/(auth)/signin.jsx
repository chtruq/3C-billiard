import {
  View,
  Text,
  Image,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import TextField from "../../components/TextField";

const SignIn = () => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");

  const mailIcon = require("../../assets/mail.png");
  const passwordIcon = require("../../assets/lock.png");
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView>
          <View className="m-4">
            <View className="items-center mt-10">
              <Image
                source={require("../../assets/3C-Icon.png")}
                className="w-[120px] h-[120px] "
              />
            </View>
            <View>
              <Text className="text-primary font-pbold text-3xl text-center mt-5">
                Let's sign you in.
              </Text>
            </View>

            <View className="mt-[20%]">
              {/* <View>
            <Text className="text-lg text-gray-500">Email</Text>
            <View className="border-b-2 border-gray-300 flex-row justify-between">
              <TextInput
                placeholder="username@example.com"
                onChangeText={onChangeText}
                value={text}
                className="text-lg pt-3"
              />
              <Image
                source={require("../../assets/mail.png")}
                className="mt-4"
              />
            </View>
          </View> */}
              <TextField
                fieldName="Email"
                placeholder="username@example.com"
                onChange={onChangeText}
                value={text}
                icon={mailIcon}
              />
              <TextField
                fieldName="Password"
                placeholder="************"
                onChange={onChangeText}
                value={text}
                icon={passwordIcon}
              />
              {/* <View className="mt-4">
            <Text className="text-lg text-gray-500">Password</Text>
            <View className="border-b-2 border-gray-300 flex-row justify-between">
              <TextInput
                placeholder="************"
                onChangeText={onChangeText}
                value={text}
                className="text-lg pt-3"
              />
              <Image
                source={require("../../assets/lock.png")}
                className="mt-4"
              />
            </View>
          </View> */}
            </View>
            <View className="flex-row justify-end w-[100%] mt-2">
              <Link className="text-lg" href="/forgot-password">
                Forgot password?
              </Link>
            </View>

            <View className="mt-5">
              <TouchableOpacity
                onPress={() => {
                  router.push("/home");
                }}
                className="py-4 bg-primary rounded-3xl border-2"
              >
                <Text className="text-white text-base font-psemibold text-center">
                  Sign in
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  router.push("/home");
                }}
                className="bg-white rounded-3xl border-2 mt-4"
              >
                <View className="py-4 px-10 flex-row justify-center items-center w-[90vw]">
                  <Image
                    source={require("../../assets/flat-color-icons_google.png")}
                    className="text-center w-6 h-6"
                  />
                  <Text className="ml-2 text-primary text-base font-psemibold text-center">
                    Sign in with Google
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View className="flex-row justify-center mt-10">
              <Text className="text-lg">New Member?</Text>
              <Link href="/signup">
                <Text className="text-lg text-primary font-pbold">
                  {" "}
                  Sign up now
                </Text>
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;
