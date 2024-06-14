import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const DoctorsList = ({ catName }) => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://doctor-appointment-webapp-bakend.onrender.com/api/filter/doctors?catName=${catName}`
      )
      .then((res) => {
        setDoctors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [catName]);
  return (
    doctors && (
      <SafeAreaView className=" px-5 py-3 ">
        <FlatList
          data={doctors}
          renderItem={({ item }) => (
            <View className=" bg-white w-full h-[200px] flex-col my-3 px-3 py-2 rounded-xl">
              <View className=" flex-row">
                <View className="w-[120px]  h-[120px]">
                  <Image
                    source={{ uri: item.image }}
                    className=" w-[100%] h-[100%] rounded-lg object-cover"
                  />
                </View>
                <View className=" p-3">
                  <Text className=" font-bold text-lg">{item.name}</Text>
                  <Text className=" font-bold  text-gray-700">
                    {item.category}
                  </Text>
                  <Text className=" font-bold  text-blue-700 my-2">
                    Experiance: {item.yearsOfExperience} years
                  </Text>
                  <Text className=" text-blue-800 underline font-bold">
                    View Deatils..
                  </Text>
                </View>
              </View>
              <View className=" items-center">
                <TouchableOpacity
                  className={`px-5 py-2 bg-blue-100  my-4  w-full rounded-xl`}
                >
                  <Text
                    className={`text-center text-blue-700 font-bold text-lg`}
                  >
                    Make a Appointment
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    )
  );
};

export default DoctorsList;
