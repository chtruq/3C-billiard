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
import { SafeAreaView } from "react-native-safe-area-context";

import React, { useState, useEffect } from "react";
import {
  getAllNotifications,
  getNotificationsByUserId,
} from "../../lib/action/notification";
import { useGlobalContext } from "../../context/GlobalProvider";
import NotiCard from "../../components/notification/NotiCard";

const Notification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({ notificates: [] });
  const [isRefreshing, setIsRefreshing] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await getNotificationsByUserId(user.userid);
      const sortedData = res.notificates.sort((a, b) => b.id - a.id);
      setData({ notificates: sortedData });
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
  console.log("data: ", data);

  const { user } = useGlobalContext();
  console.log("user: ", user);

  // const datas = [
  //   {
  //     avatar: require("../../assets/avatar.png"),
  //     name: "Nguyễn Văn A",
  //     type: "booking",
  //     status: "accept",
  //     time: "10/06/2024",
  //   },
  //   {
  //     avatar: require("../../assets/avatar.png"),
  //     name: "Nguyễn Văn A",
  //     type: "booking",
  //     status: "reject",
  //   },
  //   {
  //     avatar: require("../../assets/avatar.png"),
  //     name: "Nguyễn Văn A",
  //     type: "booking",
  //     status: "send",
  //     time: "10/06/2024",
  //   },
  // ];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {/* <View className="h-[100vh] bg-white"> */}
        <ScrollView
          className="bg-white h-[100vh]"
          refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
          }
        >
          {data.notificates.map((item, index) => (
            <NotiCard key={index} data={item} />
          ))}
        </ScrollView>
        {/* <FlatList className="bg-white h-[90vh]"
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Notifi data={item} />}
          /> */}
        {/* </View> */}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Notification;
