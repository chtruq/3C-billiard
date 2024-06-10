import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import InputField from "../../../components/clb/InputField";
import provincedata from "../../../lib/dist/tinh_tp.json";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
const ClubOwned = () => {
  const [province, setProvince] = useState();
  const pickerRef = useRef();
  const open = () => {
    pickerRef.current.focus();
  };

  const close = () => {
    pickerRef.current.blur();
  };

  console.log(provincedata);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView className="bg-white">
          <View className="mx-4">
            <View>
              <Text className="font-psemibold text-base">
                Thông tin chi tiết về câu lạc bộ
              </Text>
              <InputField title={"Tên câu lạc bộ"} />
              {/* <Picker
            ref={pickerRef}
            selectedValue={province}
            onValueChange={(itemValue, itemIndex) => setProvince(itemValue)}
          >
            {Object.keys(provincedata).map((key) => (
              <Picker.Item
                key={key}
                label={provincedata[key].name_with_type}
                value={provincedata[key].code}
              />
            ))}
          </Picker> */}
              <InputField title={"Tỉnh/Thành phố"} />
              <InputField title={"Quận / Huyện / Thị xã / Thành phố"} />
              <InputField title={"Phường / Xã / Thị trấn"} />
            </View>
            <View className="mt-2">
              <Text className="font-psemibold text-base">Giờ mở cửa</Text>
              <InputField title={"Giờ mở cửa"} />
            </View>
            <View className="mt-2">
              <Text className="font-psemibold text-base">Liên hệ</Text>
              <InputField title={"Số điện thoại"} />
              <InputField title={"Trang web nếu có"} />
            </View>
            <View className="mt-2">
              <Text className="font-psemibold text-base">
                Hình ảnh về câu lạc bộ
              </Text>
              <View className="items-center w-24 border rounded-lg h-24 my-2 justify-center">
                <Image
                  className="h-6 w-6"
                  source={require("../../../assets/camera-photo.png")}
                />
              </View>
            </View>
            <View className="mt-2">
              <Text className="font-psemibold text-base">
                Mô tả về câu lạc bộ của bạn
              </Text>
              <TextInput
                className="border border-gray-600 rounded-md p-2 w-full text-base items-center "
                placeholder={"Thông tin về câu lạc bộ của bạn"}
                multiline={true}
                numberOfLines={4}
              />
            </View>
          </View>
          <View className="p-4">
            <TouchableOpacity
              onPress={() => {
                router.back("profile-detail/club-owned");
              }}
              className="bg-primary rounded-xl py-4 w-full items-center justify-center"
            >
              <Text className="text-white text-base font-psemibold ">
                Hoàn tất
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default ClubOwned;
