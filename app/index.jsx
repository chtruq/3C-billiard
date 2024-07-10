import { Link, SplashScreen, router, useFocusEffect } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const bg = require("../assets/background.png");

  useFocusEffect(() => {
    SplashScreen.preventAutoHideAsync()
      .then((result) => {
        if (result) {
          setTimeout(() => {
            SplashScreen.hideAsync();
          }, 2000);
        }
      })
      .catch((error) => console.error(error));

    router.replace("/signin");
  });

  return (
    // <View className="flex-1 items-center justify-center">
    //   <ImageBackground
    //     source={bg}
    //     resizeMode="contain"
    //     className="w-[100vw] h-[100vh]"
    //   >
    //     <View className="flex-1 items-center justify-center">
    //       <Image source={require("../assets/3C-Icon.png")} />
    //       <Text className="text-lg mt-2 font-pregular text-black">
    //         Connect-Cue-Community
    //       </Text>
    //       {/* <ActivityIndicator className="mt-4" size="large" /> */}
    //     </View>
    //   </ImageBackground>
    //   <StatusBar style="auto" />
    // </View>
    <></>
  );
}
