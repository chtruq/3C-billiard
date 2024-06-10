import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import TabsBooking from "../../../components/booking/TabsBooking";
import { router } from "expo-router";
import BookingStatus from "../../../components/booking/BookingStatus";

const Booking = () => {
  const [active, setActive] = useState(true);
  const [history, setHistory] = useState(false);

  // const onActiveChange = () => {
  //   setActive(!active);
  //   setHistory(!history);
  // };
  const onChangeTabs = () => {
    setActive(!active);
    setHistory(!history);
  };

  const activeBookingData = [
    {
      id: 1,
      name: "CLB Bida Đỗ Vương",
      address: "Thủ Đức, TP.Hồ Chí Minh",
      time: "19:00 - 21:00",
      date: "Thứ 2, 20/09/2021",
      status: "Chờ xác nhận",
      price: "200.000đ",
      avatar: require("../../../assets/avatar.png"),
    },

    {
      id: 2,
      name: "Bida làng đại học",
      address: "Dĩ An, Bình Dương",
      time: "19:00 - 21:00",
      date: "Thứ 2, 20/09/2021",
      status: "Chờ xác nhận",
      price: "320.000đ",

      avatar: require("../../../assets/avatar.png"),
    },
  ];

  const historyBookingData = [
    {
      id: 1,
      name: "CLB Bida Đỗ Vương",
      address: "Thủ Đức, TP.Hồ Chí Minh",
      time: "19:00 - 21:00",
      date: "Thứ 2, 20/09/2021",
      status: "Đã xác nhận",
      price: "200.000đ",
      avatar: require("../../../assets/avatar.png"),
    },

    {
      id: 2,
      name: "Bida làng đại học",
      address: "Dĩ An, Bình Dương",
      time: "19:00 - 21:00",
      date: "Thứ 2, 20/09/2021",
      status: "Bị từ chối",
      price: "320.000đ",

      avatar: require("../../../assets/avatar.png"),
    },
  ];

  return (
    <View className="bg-white h-[100vh]">
      <View className="mt-1">
        <TabsBooking
          activeBooking={active}
          history={history}
          onChange={onChangeTabs}
        />
        <ScrollView className="h-[80vh]">
          {active &&
            activeBookingData.map((data) => (
              <BookingStatus key={data.id} data={data} />
            ))}
          {history &&
            historyBookingData.map((data) => (
              <BookingStatus key={data.id} data={data} />
            ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Booking;
