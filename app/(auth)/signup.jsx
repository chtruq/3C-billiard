import { View, Text, ImageBackground } from "react-native";
import React from "react";

const SignUp = () => {
  return (
    <View>
      <View className="flex-1 items-center">
        <Image
          source={require("../../assets/3C-Icon.png")}
          className="w-[100vw] h-[100vh] "
        ></Image>
      </View>
    </View>
  );
};

export default SignUp;
