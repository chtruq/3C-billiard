import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const MomoPayment = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const getTotalPrice = async () => {
    const totalPrice = await AsyncStorage.getItem("@totalPrice");
    setTotalPrice(totalPrice);
  };

  useEffect(() => {
    getTotalPrice();
    console.log("totalPrice", totalPrice);
  }, []);

  const handleBooking = async () => {
    // try {
    //   const timeIds = JSON.parse(await AsyncStorage.getItem("@timeIds"));
    //   const selectedSlot = JSON.parse(
    //     await AsyncStorage.getItem("@selectedSlots")
    //   );
    //   const date = JSON.parse(await AsyncStorage.getItem("@selectedDate"));
    //   const user = JSON.parse(await AsyncStorage.getItem("@user"));
    //   const club = JSON.parse(await AsyncStorage.getItem("@club"));
    //   const totalPrice = JSON.parse(await AsyncStorage.getItem("@totalPrice"));
    //   const data = {
    //     timeIds,
    //     selectedSlot,
    //     date,
    //     user,
    //     club,
    //     totalPrice,
    //   };
    //   const response = await bookingBidaSlot(data);
    //   console.log("response", response);
    //   if (response.status === 200) {
    //     setOrderCode(response.data.orderCode);
    //     await AsyncStorage.setItem(
    //       "@orderCode",
    //       JSON.stringify(response.data.orderCode)
    //     );
    //     await AsyncStorage.setItem("@totalPrice", JSON.stringify(totalPrice));
    //     await AsyncStorage.setItem(
    //       "@selectedSlots",
    //       JSON.stringify(selectedSlot)
    //     );
    //     await AsyncStorage.setItem("@selectedDate", JSON.stringify(date));
    //     await AsyncStorage.setItem("@timeIds", JSON.stringify(timeIds));
    //     await AsyncStorage.setItem("@club", JSON.stringify(club));
    //     await AsyncStorage.setItem("@user", JSON.stringify(user));
    //     router.push("/booking-clb/success");
    //   }
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //     AsyncStorage.removeItem("timeIds");
    //     AsyncStorage.removeItem("selectedSlots");
    //     AsyncStorage.removeItem("selectedDate");
    // }
  };

  return (
    <View className="h-[100%] bg-white">
      <View className="m-2">
        <Text className="text-center font-psemibold text-base">
          Quét QR phía dưới để chuyển tiền tới clb
        </Text>

        <View className="w-full h-[50vh]">
          <Image
            source={require("../../assets/payment/momo.jpg")}
            className="w-[95vw] h-[50vh]"
          />
        </View>
        <View className="mt-2">
          <Text className="font-pmedium text-base">
            Số tiền cần chuyển:{" "}
            <Text className="text-xl font-pbold">{totalPrice}</Text>
          </Text>
        </View>
        <View>
          <Text className="font-pmedium text-base">
            Lưu ý: Vui lòng chuyển đúng số tiền và ghi chú số điện thoại của bạn
          </Text>
        </View>
      </View>
      <View className="absolute bottom-6 w-full items-center ">
        <TouchableOpacity
          className="py-4 bg-primary rounded-3xl border-2 w-[95%] mx-2 items-center"
          onPress={() => {
            console.log("Thanh toán thành công");
            router.push("/booking-clb/success");
          }}
        >
          <View className="items-center">
            <Text className="text-white items-center font-psemibold text-base">
              Đã chuyển tiền, xác nhận
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MomoPayment;
