import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

const Club = ({ data, style }) => {
  return (
    <TouchableOpacity
      className={`flex-row p-2 bg-gray-50 my-1 mx-3 ${style} rounded-lg`}
      onPress={() =>
        router.navigate({
          pathname: "/bida-club/[id]",
          params: { id: data?.id },
        })
      }
    >
      <View>
        <Image source={require("../../assets/clubImage.png")} />
      </View>
      <View className="ml-2 w-[50vw]">
        <Text className="text-base font-psemibold pt-2">{data?.bidaName}</Text>
        <Text className="text-sm text-primary font-pbold pt-2">
          {data.price ? data?.price : "89.000đ/giờ"}
        </Text>
        <Text className="text-sm font-pregular text-gray-500 pt-2">
          {data?.address}
        </Text>
        <View className="flex-row justify-between items-center pt-2">
          <View className="flex-row items-center">
            <AntDesign name="star" size={20} color="#FFD33C" />
            <Text className="font-pbold ml-1">
              {data.star ? data?.star : "4.5"}
            </Text>
          </View>
          <Text className="font-pregular text-gray-500">
            {data.distance ? data.distance : "3.3km"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Club;
