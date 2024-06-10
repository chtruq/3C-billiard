import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import InputField from "../../../components/clb/InputField";
import * as ImagePicker from "expo-image-picker";
const CreateTable = () => {
  const [image, setImage] = useState(null);
  const [form, setForm] = useState({
    name: "",
    price: "",
    type: "",
    image: "",
  });

  const onChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View className="h-[90vh] bg-white">
      <View className="mx-4">
        <Text className="text-lg font-psemibold">Thông tin về bàn bida </Text>
        <InputField
          title={"Tên bàn bida"}
          value={form.name}
          onChange={(text) => onChange("name", text)}
        />
        <InputField
          title={"Giá tiền của bàn"}
          value={form.price}
          onChange={(text) => onChange("price", text)}
        />
        <Text className="text-lg font-psemibold">Loại bàn bida </Text>
        <InputField
          title={"Phăng, pool, snooker,..."}
          value={form.name}
          onChange={(text) => onChange("name", text)}
        />
        <Text className="text-lg font-psemibold">Hình của bàn </Text>
        <TouchableOpacity onPress={pickImage}>
          <Text>Chọn hình</Text>
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} className="w-52 h-52" />}
      </View>
      <View className="absolute bottom-6 w-full">
        <TouchableOpacity
          className="bg-primary rounded-3xl py-4 items-center border-2 mt-4 mx-2"
          onPress={() => {
            // router.push("/home");
          }}
        >
          <Text className="text-white">Thêm bàn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateTable;
