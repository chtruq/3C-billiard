import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import SearchGroup from "../../components/booking/SearchGroup";
import Club from "../../components/booking/club";
import { getAllBidaClubs } from "../../lib/action/bidaclubs";
const Booking = () => {
  const province = "Hồ Chí Minh";
  const district = "Thủ Đức";
  const ward = "Hiệp Bình Chánh";
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await getAllBidaClubs();
      setData(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onRefresh = React.useCallback(() => {
    setIsRefreshing(true);
    fetchData().finally(() => setIsRefreshing(false));
  }, [data]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
          }
          className="h-[100vw] bg-white"
        >
          <View className="mt-11">
            <View className="p-2">
              <Text className="font-pmedium ml-2 text-gray-500">
                {province}
              </Text>
              <TouchableOpacity className="ml-1 flex-row items-center">
                <Entypo name="location-pin" size={20} color="red" />
                <View className="flex-row items-center ml-1">
                  <Text className="text-base">
                    {ward}, {district}
                  </Text>
                  <Feather name="chevron-down" size={24} color="red" />
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <SearchGroup />
            </View>

            <View className="items-center m-2">
              <Text className="font-pbold text-lg">Phòng chơi gần đây</Text>
            </View>
            {/* list clb */}
            {isLoading && !isRefreshing && (
              <View className="h-[70vh] items-center justify-center">
                <ActivityIndicator size="large" color="#e12727" />
              </View>
            )}

            <ScrollView>
              {data
                ?.filter((item) => item.status === "ACTIVE")
                .map((item, index) => (
                  <Club key={item.id} style="w-100" data={item} />
                ))}
            </ScrollView>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Booking;
