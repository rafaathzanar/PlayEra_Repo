import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center bg-[#FFFFFF]">
      <StatusBar style="light" />
    </View>
  );
}
