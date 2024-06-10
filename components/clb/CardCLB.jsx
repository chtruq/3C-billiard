import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
const CardCLB = ({ data }) => {
  return (
    <View
      className={`h-[20vh] my-2 border rounded-md ${
        data?.status === "waiting" && "border-orange-500"
      } ${data?.status === "reject" && "border-primary"} ${
        data?.status === "active" && "border-green-600"
      }  `}
    >
      <View className="mx-2">
        <Text className="font-pbold text-lg">{data?.name || "name"}</Text>
        <Text className="font-pmedium">{data?.address || "Address"}</Text>
        <View className="flex-row items-center justify-between mx-4 mt-10 ">
          <TouchableOpacity
            onPress={() => {
              // router.push("/")
            }}
            className="items-center"
          >
            <Feather name="edit" size={24} color="black" />
            <Text>Chỉnh sửa</Text>
          </TouchableOpacity>
          {data?.status === "active" && (
            <TouchableOpacity
              onPress={() => {
                router.push("/booking-clb/clbowner");
              }}
              className="items-center"
            >
              <Image
                className="w-6 h-6"
                source={require("../../assets/table-edit.png")}
              />
              <Text>Quản lí bàn</Text>
            </TouchableOpacity>
          )}

          {data?.status === "active" && (
            <TouchableOpacity
              onPress={() => {
                router.push("/profile-detail/table-owned");
              }}
              className="items-center"
            >
              <Image
                className="w-6 h-6"
                source={require("../../assets/table-create.png")}
              />
              <Text>Tạo bàn bida</Text>
            </TouchableOpacity>
          )}

          {data?.status === "reject" && (
            <View className="bg-primary px-4 w-32 py-2 rounded-lg">
              <Text className="text-white font-pbold text-center">
                Bị từ chối
              </Text>
            </View>
          )}
          {data?.status === "waiting" && (
            <View className="bg-orange-500 px-4 w-32 py-2 rounded-lg">
              <Text className="text-white font-pbold">Chờ xác nhận</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default CardCLB;
