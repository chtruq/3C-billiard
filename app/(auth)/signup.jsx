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
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TextField from "../../components/TextField";
import { Link, router, useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { register } from "../../lib/action/users";

const SignUp = () => {
  const userIcon = require("../../assets/user.png");
  const mailIcon = require("../../assets/mail.png");
  const phoneIcon = require("../../assets/smartphone.png");
  const passwordIcon = require("../../assets/lock.png");

  const [form, setForm] = useState({
    name: "Chi Trung",
    email: "trung@gmail.com",
    phone: "0987654321",
    password: "123@abcD",
  });

  const validate = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^(\+)?(\d[- .]*){7,13}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (form.name === "") {
      alert("Vui lòng nhập họ và tên");
      return false;
    }
    if (form.email === "") {
      alert("Vui lòng nhập email");
      return false;
    }
    if (form.phone === "") {
      alert("Vui lòng nhập số điện thoại");
      return false;
    }
    if (form.password === "") {
      alert("Vui lòng nhập mật khẩu");
      return false;
    }

    if (!emailRegex.test(form.email)) {
      alert("Email không hợp lệ");
      return false;
    }
    if (!phoneRegex.test(form.phone)) {
      alert("Số điện thoại không hợp lệ");
      return false;
    }
    // if (!passwordRegex.test(form.password)) {
    //   alert(

    return true;
  };

  const handleSubmit = async () => {
    if (validate()) {
      try {
        await AsyncStorage.setItem("email", form.email);
        console.log("form", form);
        const response = await register(form);
        console.log(response);
        router.push("/verify-email");
      } catch (error) {
        // saving error
        console.log(error);
      }
    }
  };

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
                Đăng kí
              </Text>
            </View>

            <View className="mt-4">
              <TextField
                placeholder="Your full name"
                fieldName="Họ và tên"
                handleChangeText={(e) => {
                  setForm({ ...form, name: e });
                }}
                value={form.name}
                icon={userIcon}
              />
              <TextField
                placeholder="username@example.com"
                fieldName="Email"
                handleChangeText={(e) => {
                  setForm({ ...form, email: e });
                }}
                value={form.email}
                icon={mailIcon}
              />
              <TextField
                placeholder="0978654321"
                fieldName="Số điện thoại"
                handleChangeText={(e) => {
                  setForm({ ...form, phone: e });
                }}
                value={form.phone}
                icon={phoneIcon}
              />
              <TextField
                placeholder="************"
                handleChangeText={(e) => {
                  setForm({ ...form, password: e });
                }}
                fieldName="Mật khẩu"
                value={form.password}
                // icon={passwordIcon}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                handleSubmit();
              }}
              className="mt-4 bg-primary py-4 rounded-full flex-row justify-center items-center"
            >
              <Text className="text-white font-pbold text-xl">Tiếp theo</Text>
            </TouchableOpacity>
            <View className="flex-row justify-center mt-4">
              <Text className="font-pmedium text-lg">Đã có tài khoản? </Text>
              <TouchableOpacity
                onPress={() => {
                  router.push("/signin");
                }}
              >
                <Text className="text-primary font-pbold text-lg">
                  Đăng nhập
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;
