import { Text } from "react-native";
import { Pressable } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled2 = ({
  navigation
}) => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <Pressable onPress={() => navigation.navigate("Profile screen")}><View style={{
        left: 17,
        top: 110,
        position: "absolute",
        height: 38,
        width: 140,
        backgroundColor: "#efc1c1",
        borderRadius: 0,
        color: "#777777"
      }}></View></Pressable><Text style={{
      left: 42,
      top: 130,
      position: "absolute",
      width: 100,
      height: 19,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0,
      textAlign: "center"
    }}>Profile</Text></View>;
};

export default Untitled2;