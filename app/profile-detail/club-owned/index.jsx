import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import CardCLB from "../../../components/clb/CardCLB";
import { router } from "expo-router";

const ClubOwned = () => {
  const data = [
    {
      id: 1,
      name: "CLB Bida",
      address: "123 Đường 3/2, Quận 10, TP.HCM",
      status: "active",
    },
    {
      id: 2,
      name: "CLB Bida 2",
      address: "123 Đường 3/2, Quận 10, TP.HCM",
      status: "waiting",
    },
    {
      id: 3,
      name: "CLB Bida 3",
      address: "123 Đường 3/2, Quận 10, TP.HCM",
      status: "reject",
    },
  ];

  return (
    <ScrollView className="bg-white">
      <View className="h-[90vh]">
        <View className="mx-2">
          {data.map((item) => {
            return <CardCLB key={item.id} data={item} />;
          })}
        </View>
        <View className="items-center absolute bottom-6 w-[100vw]">
          <TouchableOpacity
            onPress={() => {
              router.push("/profile-detail/club-register");
            }}
            className="bg-primary w-[90%] items-center mx-2 py-4 rounded-3xl border-2 border-primary"
          >
            <Text className="font-pbold text-white">Đăng kí thêm CLB</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ClubOwned;
