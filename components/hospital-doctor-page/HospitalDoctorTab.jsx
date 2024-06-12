import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const HospitalDoctorTab = () => {
  const [isActiveTab, setIsActiveTab] = useState(0);
  return (
    <View className=" flex-row items-center justify-around">
      <TouchableOpacity
        onPress={() => {
          setIsActiveTab(0);
        }}
      >
        <Text
          className={`font-bold text-[16px] pb-1   ${
            isActiveTab == 0
              ? " text-blue-500 border-b-2 border-blue-500 "
              : " text-gray-500 border-b-2 border-b-gray-600"
          }`}
        >
          Hospital
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsActiveTab(1)}>
        <Text
          className={`font-bold text-[16px] pb-1 ${
            isActiveTab == 1
              ? " text-blue-500 border-b-2 border-b-blue-500 "
              : " text-gray-500 border-b-2 border-b-gray-600"
          }`}
        >
          Doctor
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HospitalDoctorTab;
