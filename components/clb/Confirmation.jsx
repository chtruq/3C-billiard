import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { acceptBill, rejectBill } from "../../lib/action/bill";
import { getBidaTableSlotByTableId } from "../../lib/action/bidaTableSlot";
import { router } from "expo-router";

const Confirmation = ({ data, reloadData }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAccept = async () => {
    try {
      setIsLoading(true);
      const response = await acceptBill(data.id);
      console.log(response);
      reloadData();
      Alert.alert("Đã chấp nhận đơn đặt bàn");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReject = async () => {
    try {
      setIsLoading(true);
      const response = await rejectBill(data.id);
      console.log(response);
      Alert.alert("Đã từ chối đơn đặt bàn");
      reloadData();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (data.bookedSlotIds) {
    const getBookingTime = async (id) => {
      try {
        console.log("id", id);
        const response = await getBidaTableSlotByTableId(id);
        console.log("rslx", response);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      data.bookedSlotIds.map((item) => getBookingTime(item));
    }, []);
  }

  return (
    <View className="p-2 rounded-lg border my-1 h-[20vh]">
      <View>
        <Text className="font-pmedium text-lg">{data.bookerName}</Text>
      </View>
      <Text className="font-pmedium">
        Ngày đặt: {new Date(data.bookingDate).toLocaleDateString("en-GB")}
      </Text>
      <Text className="font-pmedium">
        Thời gian: {data.bookedSlotIds.map((item) => item).join(",")}
      </Text>
      <Text className="font-pmedium">
        Phương thức thanh toán:{" "}
        {data.paymentMethods === 0 ? "Momo" : "Tiền mặt"}{" "}
      </Text>
      <View className="flex-row justify-around mt-2">
        <TouchableOpacity
          onPress={() => {
            handleAccept();
          }}
          className="bg-green-500 p-4 rounded-lg"
        >
          <Text className=" text-white ">Đồng ý</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleReject();
          }}
          className="bg-primary p-4 rounded-lg"
        >
          <Text className="text-white">Từ chối</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Confirmation;
