import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Notifi from "../../components/profile/notifi/Notifi";

const Notification = () => {
  const data = [
    {
      avatar: require("../../assets/avatar.png"),
      name: "Nguyễn Văn A",
      type: "booking",
      status: "accept",
      time: "10/06/2024",
    },
    {
      avatar: require("../../assets/avatar.png"),
      name: "Nguyễn Văn A",
      type: "booking",
      status: "reject",
    },
    {
      avatar: require("../../assets/avatar.png"),
      name: "Nguyễn Văn A",
      type: "booking",
      status: "send",
      time: "10/06/2024",
    },
  ];

  return (
    <ScrollView className="bg-white h-[90vh]">
      {data.map((item, index) => (
        <Notifi key={index} data={item} />
      ))}
    </ScrollView>
  );
};

export default Notification;
