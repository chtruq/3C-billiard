import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Totalbooking from "../../components/booking/totalbooking";
import { Slot } from "expo-router";
import { Entypo } from "@expo/vector-icons";
const DetailAppoinment = () => {
  const data = {
    table: "1",
    slot: "11:00, 12:00, 13:00",
    price: "60000",
  };

  const data1 = {
    table: "2",
    slot: "11:00",
    price: "70000",
  };

  const slotCount1 = data.slot.split(",").length;
  const slotCount2 = data1.slot.split(",").length;

  // Convert the price strings to numbers and multiply by the number of slots
  const totalPrice1 = Number(data.price) * slotCount1;
  const totalPrice2 = Number(data1.price) * slotCount2;

  // Add the total prices for both tables
  const total = totalPrice1 + totalPrice2;

  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const totalInVND = formatter.format(total);

  console.log(totalInVND);

  return (
    <View>
      <ImageBackground
        className="h-[100vh]"
        source={require("../../assets/background.png")}
      >
        <View>
          <View className="w-[100%] items-center justify-center">
            <View className="w-[90%] flex-row mt-16 rounded-md border bg-white">
              <Image
                source={require("../../assets/clubImage.png")}
                className="w-[80px] h-[80px] m-2"
              />
              <View>
                <Text className="font-pbold text-lg">CLB Bida Đỗ Vương</Text>
                <View className="flex-row my-2 items-center">
                  <FontAwesome6 name="location-dot" size={20} color="#E12727" />
                  <Text className="text-sm mx-2">178, Hoàng Diệu 2 (2km)</Text>
                </View>
                <View className="flex-row mb-2 items-center">
                  <AntDesign name="star" size={20} color="#E12727" />
                  <Text className="text-sm mx-2">5.0 (24)</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View className="absolute bottom-4 bg-white h-[70vh] w-[100%] rounded-t-3xl border border-gray-200 shadow-lg">
          <View>
            <Text className="mx-4 mt-2 font-pbold text-lg">Thời gian</Text>
            <Text className="mx-4 mt-2font-psemibold text-base text text-gray-500">
              Sun, 15Jan - 08:00 AM
            </Text>
          </View>
          <View>
            <Text className="font-pbold text-lg mx-4 mt-2">Các bàn đã đặt</Text>
            <View>
              <Totalbooking data={data} />
              <Totalbooking data={data1} />
            </View>
          </View>
          <View className="mt-4 mx-4 border border-gray-300"></View>
          <View className="flex-row justify-between">
            <Text className="mx-4 mt-2 font-pbold text-lg">
              Tổng thanh toán
            </Text>
            <Text className="mx-4 mt-2 font-pbold text-lg"> {totalInVND} </Text>
          </View>
          <View className="w-[100%] items-center absolute bottom-24  ">
            <TouchableOpacity className="w-[80%] bg-primary items-center p-4 rounded-lg">
              <View className="flex-row items-center">
                <Text className=" text-white font-psemibold text-base ">
                  Thanh toán
                </Text>
                <Text> </Text>
                <Entypo name="wallet" size={24} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DetailAppoinment;
