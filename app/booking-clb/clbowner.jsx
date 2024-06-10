import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import DatePicker from "react-native-modern-datepicker";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { getBidaTableById } from "../../lib/action/bidaTable";
import {
  getBidaTableSlot,
  getBidaTableSlotByDateAndTableId,
  getBidaTableSlotByTableId,
} from "../../lib/action/bidaTableSlot";
import { isLoading } from "expo-font";
import { bookingBidaSlot } from "../../lib/action/booking";
import { useGlobalContext } from "../../context/GlobalProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "../../components/Button";

const Agenda = ({ onDateChange }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [seventhDay, setSeventhDay] = useState(new Date());

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const monthNames = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  useEffect(() => {
    const next7days = new Date();
    next7days.setDate(next7days.getDate() + 7);
    setSeventhDay(next7days);
  }, []);

  //make the format date

  //make the array from current date to seventh day
  const makeDateArray = (start, end) => {
    const arr = [];
    for (
      let dt = new Date(start);
      dt <= new Date(end);
      dt.setDate(dt.getDate() + 1)
    ) {
      arr.push(new Date(dt));
    }
    return arr;
  };

  const dateArray = makeDateArray(currentDate, seventhDay);

  //format dateArray YY/MM/DD

  const formattedDateArray = dateArray.map((date) => {
    let year = date.getFullYear().toString().slice(-2); // get last two digits of year
    let month = ("0" + (date.getMonth() + 1)).slice(-2); // get month and pad with 0 if necessary
    let day = ("0" + date.getDate()).slice(-2); // get day and pad with 0 if necessary
    return `${year}/${month}/${day}`;
  });

  useEffect(() => {
    setSelectedDate(formattedDateArray[0]);
  }, []);

  return (
    <View>
      <View className="my-2">
        <Text className="font-pmedium text-base text-center">
          {monthNames[currentMonth]} {currentYear}
        </Text>
      </View>
      <View className="items-center">
        <FlatList
          data={formattedDateArray}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              className={`${
                selectedDate == item ? "bg-primary" : ""
              } rounded-full border p-2 m-1 w-10 h-10 justify-center items-center`}
              onPress={() => {
                setSelectedDate(item);
                onDateChange(item);
              }}
            >
              <Text
                className={`${
                  selectedDate == item ? "text-white" : ""
                } font-pmedium text-sm`}
              >
                {item.slice(6, 8)}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const Table = ({ table, onPress, isSelected }) => {
  return (
    <TouchableOpacity
      className="mx-2 items-center"
      onPress={() => {
        onPress(table);
      }}
    >
      <View style={{ opacity: isSelected ? 0.5 : 1 }}>
        <Image source={require("../../assets/table.png")} />
      </View>
      <Text
        className={`font-pbold text-base ${isSelected ? "text-gray-400" : ""}`}
      >
        {table.tableName}
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

const AvailableTime = ({ data, table, setSelectedSlots, selectedSlots }) => {
  const isSelected = selectedSlots.some(
    (slot) => slot.table.id === table.id && slot.time.id === data.id
  );

  const handlePress = () => {
    if (!isSelected) {
      setSelectedSlots((prevSlots) => [...prevSlots, { table, time: data }]);
    } else {
      setSelectedSlots((prevSlots) =>
        prevSlots.filter(
          (slot) => slot.table.id !== table.id || slot.time.id !== data.id
        )
      );
    }
  };
  return (
    <View>
      {data.status === "ACTIVE" ? (
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
              {data.slotStartTime.split(":").slice(0, 2).join(":")}
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <View className="mx-2 my-2 items-center w-20 rounded-md border border-gray-300">
          <Text className="font-pbold text-gray-300 text-base">
            {data.slotStartTime}
          </Text>
        </View>
      )}
    </View>
  );
};

const CLBOwner = () => {
  const { id } = useLocalSearchParams("id");
  const { user } = useGlobalContext();
  const currentDate = new Date();
  //format date YY/MM/DD
  let year = currentDate.getFullYear().toString().slice(-2);
  let month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
  let day = ("0" + currentDate.getDate()).slice(-2);
  const formattedCurrentDate = `${year}/${month}/${day}`;

  const [selectedDate, setSelectedDate] = useState(formattedCurrentDate);
  const [tableData, setTableData] = useState([]);
  const [time, setTime] = useState([]);
  const [selectedTable, setSelectedTable] = useState(null);
  const [isSlotLoading, setIsSlotLoading] = useState(false);
  const [isTableLoading, setIsTableLoading] = useState(false);
  const [totalVND, setTotalInVND] = useState(0);

  const [selectedSlots, setSelectedSlots] = useState([]);

  //format date YY/MM/DD

  const getBidaTable = async () => {
    try {
      setIsTableLoading(true);
      const response = await getBidaTableById(id);
      setTableData(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsTableLoading(false);
    }
  };

  useEffect(() => {
    getBidaTable();
  }, []);

  const getSlot = async (id, date) => {
    try {
      setIsSlotLoading(true);
      // const response = await getBidaTableSlotByDateAndTableId(id, date);
      const response = await getBidaTableSlotByTableId(id);
      // const response = await getBidaTableSlot(id);
      setTime(response);
      return response;
    } catch (error) {
      console.log(error);
    } finally {
      setIsSlotLoading(false);
    }
  };

  useEffect(() => {
    console.log("selectedTable", selectedTable);
    console.log("selectedDate", selectedDate);
    //format selectedDate from YY/MM/DD to DD/MM/YY
    const date = selectedDate.split("/").reverse().join("/");

    if (selectedTable) {
      getSlot(selectedTable.id, date);
    }
  }, [selectedTable, selectedDate]);

  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const slotsByTable = selectedSlots.reduce((acc, slot) => {
    if (!acc[slot.table.tableName]) {
      acc[slot.table.tableName] = slot.table.price;
    } else {
      acc[slot.table.tableName] += slot.table.price;
    }
    return acc;
  }, {});

  const totalFee = selectedSlots.reduce(
    (total, slot) => total + Number(slot.table.price),
    0
  );
  const roundedTotalFee = totalFee.toFixed(2);

  useEffect(() => {
    setTotalInVND(totalFee);
  }, [totalFee]);

  const onDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    console.log("selected Date", selectedDate);
  }, [selectedDate]);

  const handleBooking = async () => {
    const timeIds = selectedSlots.map((slot) => slot.time.id);
    await AsyncStorage.removeItem("@timeIds");
    await AsyncStorage.removeItem("@selectedSlots");
    await AsyncStorage.removeItem("@selectedDate");

    try {
      if (selectedSlots.length === 0) {
        return;
      }

      await AsyncStorage.setItem("@timeIds", JSON.stringify(timeIds));
      await AsyncStorage.setItem(
        "@selectedSlots",
        JSON.stringify(selectedSlots)
      );

      await AsyncStorage.setItem("@selectedDate", JSON.stringify(selectedDate));
    } catch (error) {
      console.log(error);
    } finally {
      router.push("/booking-clb/user-info");
    }
  };

  const handleConfirm = async () => {
    // const timeIds = selectedSlots.map((slot) => slot.time.id);
    // try {
    //   if (selectedSlots.length === 0) {
    //     return;
    //   }
    //   await AsyncStorage.setItem("@timeIds", JSON.stringify(timeIds));
    //   await AsyncStorage.setItem(
    //     "@selectedSlots",
    //     JSON.stringify(selectedSlots)
    //   );
    //   await AsyncStorage.setItem("@selectedDate", JSON.stringify(selectedDate));
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   router.push("/booking-clb/confirm");
    // }
  };

  return (
    <ScrollView className=" bg-white">
      <Text className="font-pbold text-lg ml-2 mt-2">Chọn ngày</Text>
      <View className="shadow-sm">
        <Agenda onDateChange={onDateChange} />
      </View>

      <View className="border-t mx-4 border-gray-50"></View>
      <Text className="font-pbold text-base mx-2 my-2">Chọn bàn</Text>

      <ScrollView className="mx-2" horizontal>
        {isTableLoading && (
          <View className="w-[95vw]">
            <ActivityIndicator size="large" color="#E12727" />
          </View>
        )}
        {tableData?.map((table) => (
          <Table
            key={table.id}
            table={table}
            onPress={() => setSelectedTable(table)}
            isSelected={table === selectedTable}
          />
        ))}
      </ScrollView>

      <View className="">
        <Text className="mx-2 text-xl font-pbold">Chọn giờ</Text>
        <View className="flex-row flex-wrap my-4">
          {!selectedTable && (
            <View className="mx-2">
              <Text className="font-pmedium">
                Chọn bàn để hiển thị các mốc thời gian trống của bàn đó
              </Text>
            </View>
          )}
          {isSlotLoading ? (
            <View className="flex-row justify-center items-center w-[100vw]">
              <ActivityIndicator size="large" color="#E12727" />
            </View>
          ) : (
            <View className="flex-row flex-wrap">
              {time?.map((item) => (
                <AvailableTime
                  key={item.id}
                  data={item}
                  table={selectedTable}
                  style={{ width: "25%" }}
                  setSelectedSlots={setSelectedSlots}
                  selectedSlots={selectedSlots}
                />
              ))}
            </View>
          )}
        </View>
      </View>
      <View className="border-t border-gray-100"></View>
      <View>
        {user.role !== "Bida Owner" && (
          <View className="mx-2">
            <Text className="text-xl font-pbold">Thanh toán</Text>
            <View>
              {selectedSlots.length === 0 && (
                <View className="mt-2">
                  <Text className="font-pmedium">
                    Chọn bàn và thời gian để hiển thị thông tin thanh toán
                  </Text>
                </View>
              )}

              {Object.entries(slotsByTable).map(([tableName, total]) => (
                <View key={tableName} className="flex-row justify-between">
                  <Text className="text-lg font-pregular">{tableName}</Text>
                  <Text className="text-lg font-pregular">
                    {/* {formatter.format(total)} */}
                    {total.toFixed(2)}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </View>
      <View>
        {user.role != "Bida Owner" && (
          <View>
            <View className="w-[100%] border my-6 border-gray-400"></View>
            <View className="flex-row justify-between mx-4 mb-44">
              <Text className="text-xl font-pbold">Tổng phí</Text>
              <Text className="text-xl font-pbold">{roundedTotalFee}</Text>
            </View>
          </View>
        )}

        {user.role == "Bida Owner" ? (
          <View className="w-[95vw] items-center mt-2 mx-2">
            <Button
              title={"Xác nhận"}
              onSubmit={() => {
                handleConfirm();
              }}
            />
          </View>
        ) : (
          <>
            {totalFee ? (
              <View className="w-[95vw] items-center absolute bottom-0 mx-2">
                <Button
                  title={"Xác nhận đặt bàn"}
                  icon={
                    <FontAwesome5 name="calendar-alt" size={20} color="white" />
                  }
                  onSubmit={() => {
                    handleBooking();
                  }}
                />
              </View>
            ) : (
              <View className=""></View>
            )}
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default CLBOwner;
