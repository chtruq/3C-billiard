import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import DatePicker from "react-native-modern-datepicker";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Table = ({ table }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
  };
  return (
    <TouchableOpacity className="mx-2 items-center" onPress={handlePress}>
      <View style={{ opacity: isSelected ? 0.5 : 1 }}>
        <Image source={require("../../assets/table.png")} />
        {/* {isSelected && (
          <View>
            <Entypo name="check" size={24} color="black" />
          </View>
        )} */}
      </View>
      <Text
        className={`font-pbold text-base ${isSelected ? "text-gray-400" : ""}`}
      >
        {table.name}
      </Text>
      <Text
        className={`font-pbold  text-base ${
          isSelected ? "text-red-300" : "text-primary"
        }`}
      >
        {table.type}
      </Text>
    </TouchableOpacity>
  );
};

const AvailableTime = ({ slot, status }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
  };
  return (
    <View>
      {status === "available" ? (
        <TouchableOpacity
          onPress={handlePress}
          className={`mx-2 my-2 items-center w-20 rounded-md border ${
            isSelected ? "border-red-500" : ""
          }`}
        >
          <View className={`${isSelected ? "" : ""} `}>
            <Text
              className={`font-pbold text-base ${isSelected && "text-primary"}`}
            >
              {slot}
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <View className="mx-2 my-2 items-center w-20 rounded-md border border-gray-300">
          <Text className="font-pbold text-gray-300 text-base">{slot}</Text>
        </View>
      )}
    </View>
  );
};

const BookingClb = () => {
  const { id } = useLocalSearchParams("id");
  const [selectedDate, setSelectedDate] = useState("");
  const currentDate = new Date();

  //format date YY/MM/DD
  const date = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const formattedDate = `${year}-${month < 10 ? `0${month}` : month}-${
    date < 10 ? `0${date}` : date
  }`;

  const time = [
    { slot: "5:00", status: "available" },
    { slot: "6:00", status: "available" },
    { slot: "7:00", status: "available" },
    { slot: "8:00", status: "available" },
    { slot: "9:00", status: "available" },
    { slot: "10:00", status: "available" },
    { slot: "11:00", status: "available" },
    { slot: "12:00", status: "available" },
    { slot: "13:00", status: "available" },
    { slot: "14:00", status: "available" },
    { slot: "15:00", status: "available" },
    { slot: "16:00", status: "unavailable" },
    { slot: "17:00", status: "unavailable" },
    { slot: "18:00", status: "unavailable" },
    { slot: "19:00", status: "unavailable" },
    { slot: "20:00", status: "unavailable" },
    { slot: "21:00", status: "available" },
    { slot: "22:00", status: "available" },
    { slot: "23:00", status: "available" },
    { slot: "24:00", status: "available" },
  ];

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

  return (
    <ScrollView className="h-[100%] bg-white">
      <Text className="font-pbold text-base ml-5 mt-2">Chọn ngày</Text>
      <View className="shadow-sm">
        <DatePicker
          options={{
            backgroundColor: "#fff",
            textHeaderColor: "#000",
            textDefaultColor: "#000",
            selectedTextColor: "#fff", // Change this to modify the text color of the selected date
            mainColor: "#f00", // Change this to modify the background color of the selected date
            textSecondaryColor: "#000",
            borderColor: "rgba(122, 146, 165, 0.1)",
          }}
          current={formattedDate}
          selected={formattedDate}
          mode="calendar"
          minuteInterval={30}
        />
      </View>

      <View className="border-t mx-4 border-gray-50"></View>
      <Text className="font-pbold text-base ml-5 mt-2">Chọn bàn</Text>

      <ScrollView className="m-2" horizontal>
        <Table table={{ name: "Bàn 1", type: "Phăng" }} />
        <Table table={{ name: "Bàn 2", type: "Phăng" }} />
        <Table table={{ name: "Bàn 3", type: "Phăng" }} />
        <Table table={{ name: "Bàn 4", type: "Lỗ" }} />
        <Table table={{ name: "Bàn 5", type: "Lỗ" }} />
        <Table table={{ name: "Bàn 6", type: "Lỗ" }} />
        <Table table={{ name: "Bàn 7", type: "Lỗ" }} />
        <Table table={{ name: "Bàn 8", type: "Phăng" }} />
        <Table table={{ name: "Bàn 9", type: "Phăng" }} />
        <Table table={{ name: "Bàn 10", type: "Phăng" }} />
      </ScrollView>
      <Text className="font-pbold text-base ml-5 mt-2">Chọn giờ</Text>
      <View>
        <View className="flex-row flex-wrap">
          {time.map((item) => (
            <AvailableTime
              key={item.slot}
              slot={item.slot}
              status={item.status}
              style={{ width: "25%" }}
            />
          ))}
        </View>
      </View>
      <View className="border-t border-gray-100"></View>

      <View className="mx-4">
        <Text className="text-xl font-pbold">Thanh toán</Text>
        <View>
          <View className="flex-row justify-between">
            <Text className="text-lg font-pregular">Bàn 1</Text>
            <Text className="text-lg font-pregular">3 giờ</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-lg font-pregular">Bàn 2</Text>
            <Text className="text-lg font-pregular">1 giờ</Text>
          </View>
        </View>
      </View>

      <View className="w-[100%] border my-6 border-gray-400"></View>
      <View className="flex-row justify-between mx-4 mb-44">
        <Text className="text-xl font-pbold">Tổng phí</Text>
        <Text className="text-xl font-pbold">{totalInVND}</Text>
      </View>

      <View className="w-[100vw] items-center">
        <TouchableOpacity
          onPress={() => {
            router.push("/booking-clb/detail-appointment");
          }}
          className="absolute bottom-6 w-[80%] items-center bg-primary p-4 rounded-lg "
        >
          <View className="flex-row items-center">
            <Text className="text-base font-psemibold text-white">
              Xác nhận đặt bàn
            </Text>
            <Text> </Text>
            <FontAwesome5 name="calendar-alt" size={20} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BookingClb;
