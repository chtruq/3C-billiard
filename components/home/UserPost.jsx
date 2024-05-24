import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import UserAvatar from "../home/UserAvatar";

const UserPost = ({ name, time, content, like, comment, avatar }) => {
  return (
    <View>
      <View className="flex-row items-center">
        <UserAvatar style="m-2" avatar={avatar} />
        <View className="m-1">
          <Text className="font-psemibold text-lg ">{name}</Text>
          <Text className="">{time}</Text>
        </View>
      </View>
      <View>
        <Text className="mx-2 my-2 font-pmedium">{content}</Text>
      </View>
      <View className="flex-row justify-around">
        <View>
          <Text>{like} lượt thích</Text>
        </View>
        <View>
          <Text>{comment} bình luận</Text>
        </View>
      </View>
      <View className="flex-row justify-around mt-1 ">
        <TouchableOpacity className="flex-row items-center">
          <FontAwesome name="heart-o" size={20} color="black" />
          <Text className="ml-2 font-psemibold">Thích</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center">
          <FontAwesome name="comment-o" size={20} color="black" />
          <Text className="ml-2 font-psemibold">Bình luận</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserPost;
