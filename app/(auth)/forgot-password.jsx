import { View, Text } from "react-native";
import React, { useState } from "react";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ForgotPassword = () => {
  const mailIcon = require("../../assets/mail.png");

  const [mail, setMail] = useState("");

  const validate = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (mail === "") {
      alert("Vui lòng nhập email");
      return false;
    }
    if (!emailRegex.test(mail)) {
      alert("Email không hợp lệ");
      return false;
    }
    return true;
  };

  const onSubmit = async () => {
    // try{
    // }catch( ) {
    // }
    if (validate()) {
      try {
        await AsyncStorage.setItem("email", mail);
        router.push("/verify-email");
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <View className="h-[100vh] bg-white">
      <View className="m-2">
        <Text className="font-pmedium text-center text-base">
          Nhập email của bạn để nhận mã OTP về email
        </Text>
        <TextField
          fieldName="Email"
          placeholder="username@example.com"
          handleChangeText={(e) => {
            setMail(e);
          }}
          value={mail}
          icon={mailIcon}
        />
        <View className="mt-5">
          <Button
            title="Xác nhận"
            onSubmit={() => {
              onSubmit();
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;
