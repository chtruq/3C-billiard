import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { logout } from "../../lib/action/users";
import { useGlobalContext } from "../../context/GlobalProvider";

const Profile = () => {
  const { setUser, setIsLogged, user } = useGlobalContext();

  const handleLogout = async () => {
    await logout();
    setIsLogged(false);
    setUser(null);
  };
  // console.log("user", user);

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          handleLogout();
        }}
      >
        <Text>Đăng xuất</Text>
      </TouchableOpacity>

      {/* <View>
        <Text>{user ? user.email : "nothing"}</Text>
      </View> */}
    </SafeAreaView>
  );
};

export default Profile;
