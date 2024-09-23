import { Pressable, SafeAreaView, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInDown } from "react-native-reanimated";
import { router } from "expo-router";

const WelcomeScreen = () => {
  return (
    <SafeAreaView
      className="flex-1"
      style={{
        backgroundColor: "#192031",
      }}
    >
      <StatusBar style="light" />
      <View className="h-full">
        <View className="w-full px-4 items-center my-8">
          <Animated.View
            entering={FadeInDown.duration(200).springify()}
            className="flex-row justify-center items-center pb-24"
          >
            <Text className="text-white font-mono text-4xl leading-[60px] pl-1">
              Play
            </Text>
            <Text className="text-[#4AE8DD] font-mono text-4xl leading-[60px] pl-1">
              ERA
            </Text>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(200).delay(200).springify()}
          >
            <Text className="text-white text-[52px] font-medium leading-[60px]">
              Find and book sport venues easily.
            </Text>
          </Animated.View>

          <Animated.View
            className="mt-4"
            entering={FadeInDown.duration(200).delay(400).springify()}
          >
            <Text className="text-neutral-300 text-lg font-medium leading-[38px] text-center">
              Your friend in finding sports venues near you.
            </Text>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(200).delay(400).springify()}
            className="h-1/4 w-full justify-start pt-8 px-4"
          >
            <Pressable
              className="bg-[#1283A8] h-20 rounded-xl justify-center items-center"
              onPress={() => router.push("/(tabs)")}
            >
              <Text className="text-white font-bold text-2xl">Discover</Text>
            </Pressable>

            <View className="flex-row mt-4 w-full justify-center gap-2">
              <Text className="text-neutral-300 font-medium text-lg leading-[38px] text-center">
                Don't have an account?
              </Text>
              <Pressable onPress={() => alert("Register pressed!")}>
                <Text className="text-neutral-300 font-semibold text-lg leading-[38px] text-center">
                  Register
                </Text>
              </Pressable>
            </View>
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
