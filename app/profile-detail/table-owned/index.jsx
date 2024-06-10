import {
  View,
  Text,
  ScrollView,
  Touchable,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import CardTable from "../../../components/clb/CardTable";
import { router } from "expo-router";

const TableOwned = ({}) => {
  //   const data = [];
  const data = [
    {
      id: 1,
      name: "Bàn 1",
      type: "Bida Lỗ",
      price: "75000",
      image: require("../../../assets/clb_image.png"),
    },
    {
      id: 2,
      name: "Bàn 2",
      type: "3 bi",
      price: "69000",
      image: require("../../../assets/clb_image.png"),
    },
    {
      id: 3,
      name: "Bàn 3",
      type: "Bida Lỗ",
      price: "73000",
      image: require("../../../assets/clb_image.png"),
    },
  ];

  return (
    <ScrollView className="bg-white">
      <View className="items-center mt-2">
        <TouchableOpacity
          onPress={() => {
            router.push("/profile-detail/table-owned/create-table");
          }}
          className=" w-[90%] items-center mx-2 py-1 rounded-xl border-2 flex-row justify-center"
        >
          <Image
            className="w-6 h-6"
            source={require("../../../assets/tabler_table-plus.png")}
          />
          <Text> </Text>
          <Text className="font-pbold">Thêm bàn</Text>
        </TouchableOpacity>

        {data.length === 0 && (
          <View className="mt-28">
            <Image
              className="w-80 h-80"
              source={require("../../../assets/ticket-table.png")}
            />
            <Text className="text-center">
              Bạn chưa có bàn trong câu lạc bộ của chính mình!!
            </Text>
            <Text className="text-center">Tạo bàn ngay thôi</Text>
          </View>
        )}
        {data.map((item) => {
          return <CardTable key={item.id} data={item} />;
        })}
      </View>
    </ScrollView>
  );
};

export default TableOwned;
