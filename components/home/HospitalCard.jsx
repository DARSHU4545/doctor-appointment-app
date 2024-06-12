import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const HospitalCard = () => {
  const [hospitals, setHospitals] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://doctor-appointment-webapp-bakend.onrender.com/api/hospitals"
      )
      .then((res) => {
        setHospitals(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <View>
      <View className=" flex-row justify-between items-center">
        <Text className=" font-bold text-lg"> Our Premium Hospitals</Text>
        <TouchableOpacity>
          <Text className=" text-blue-700 font-bold text-lg">See All</Text>
        </TouchableOpacity>
      </View>
      <View className=" my-3 w-full ">
        <FlatList
          data={hospitals}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) =>
            index < 2 && (
              <View className=" flex-col  mx-2  w-[220px]  border border-gray-400 my-2 rounded-xl overflow-hidden">
                <View className="  bg-blue-100 rounded-full w-full h-[120px]">
                  <Image
                    source={{ uri: item.images[0].imageUrl }}
                    className=" w-[100%] h-[100%] object-cover "
                  />
                </View>
                <View className=" py-2 w-full bg-slate-50">
                  <Text className=" font-semibold text-[18px]  px-3">
                    {item.name}
                  </Text>
                  <Text className=" px-3 my-1 text-gray-700 ">
                    {item.address}
                  </Text>
                </View>
              </View>
            )
          }
        />
      </View>
    </View>
  );
};

export default HospitalCard;
