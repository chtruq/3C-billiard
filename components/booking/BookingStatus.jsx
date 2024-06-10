import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
const BookingStatus = ({ data }) => {
  return (
    <TouchableOpacity className="w-[95vw] items-center my-2 p-2 shadow-2xl rounded-lg bg-white mx-auto ">
      <View className="flex-row w-[90vw]  ">
        <View className="">
          <Image source={data.avatar} />
        </View>
        <View className="ml-4">
          <Text className="font-psemibold text-lg">{data.name}</Text>
          <View className="flex-row mt-1">
            <FontAwesome6 name="location-dot" size={16} color="#e12727" />
            <Text className="ml-1 font-pmedium">{data.address}</Text>
          </View>

          <Text className="font-pmedium mt-1">
            {data.time}, {data.date}
          </Text>
          <View className="flex-row justify-between my-1">
            <Text className="text-primary font-psemibold">{data.price}</Text>
          </View>
        </View>
      </View>
      <View className="flex-row w-[80vw] justify-between items-center mx-">
        <View className="items-center">
          <Image
            className="w-6 h-8"
            source={require("../../assets/ggmap.png")}
          />
          <Text className="font-pmedium">Bản đồ</Text>
        </View>
        <View
          className={`${data.status === "Đã xác nhận" && "bg-green-500"} ${
            data.status === "Chờ xác nhận" && "bg-yellow-500"
          } ${
            data.status === "Bị từ chối" && "bg-primary"
          }  p-4 rounded-3xl w-32`}
        >
          <Text className="font-pbold text-white text-center">
            {data.status}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BookingStatus;
