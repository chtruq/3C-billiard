import { View, Text } from "react-native";
import React from "react";

const Totalbooking = ({ data }) => {
  // data.slot split
  const slotItem = data.slot.split(",");

  // make the time with the slotItem, assuming 1 slotItem is equal to 1 hour
  const totalHours = slotItem.length;
  const totalTime = `${totalHours} giờ`;

  return (
    <View className="mx-4 mt-2">
      <View className="flex-row justify-between">
        <Text className="font-pregular text-lg">Bàn {data.table}</Text>
        <Text className="font-pregular text-lg">{data.price}đ </Text>
      </View>
      <View className="flex-row items-center justify-between mt-2">
        <View className="flex-row">
          {slotItem.map((slot, index) => (
            <View
              key={index}
              className="border mr-2 p-1 items-center rounded-lg"
            >
              <Text className="font-pregular">{slot}</Text>
            </View>
          ))}
        </View>

        <Text className="items-center font-pmedium text-sm text-gray-500">
          {totalTime}
        </Text>
      </View>
    </View>
  );
};

export default Totalbooking;
