import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const SignIn = () => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");

  return (
    <SafeAreaView>
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
          <View>
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
          </View>
          <View className="mt-4">
            <Text className="text-lg text-gray-500">Password</Text>
            <View className="border-b-2 border-gray-300 flex-row justify-between">
              <TextInput
                placeholder="************"
                onChangeText={onChangeText}
                value={text}
                className="text-lg pt-3 text-black"
              />
              <Image
                source={require("../../assets/lock.png")}
                className="mt-4"
              />
            </View>
          </View>
        </View>
        <View className="flex-row justify-end w-[100%] mt-2">
          <Link className="text-lg" href="/forgot-password">
            Forgot password?
          </Link>
        </View>

        <View>
          <View className="justify-around flex-row rounded-full border-2 mt-4">
            <View className="bg-primary rounded-full w-[100%] ">
              <Link href="/home" className="py-4 px-10">
                <Text className="text-lg text-center font-psemibold text-white">
                  Sign in
                </Text>
              </Link>
            </View>
          </View>
          <View className="justify-around rounded-full border-2 mt-4">
            <View className=" rounded-full w-[100%] ">
              <Link
                href="/home"
                className="py-4 px-10 flex-row w-[100%] items-center text-center  "
              >
                {/* <Image
                  source={require("../../assets/flat-color-icons_google.png")}
                  className="items-center w-6 h-6"
                /> */}
                <Text className="text-lg text-center font-psemibold text-primary">
                  Sign in with Google
                </Text>
              </Link>
            </View>
          </View>
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
    </SafeAreaView>
  );
};

export default SignIn;
