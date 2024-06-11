import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const DoctorSpeciality = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://doctor-appointment-webapp-bakend.onrender.com/api/categories"
      )
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <View className=" my-5 w-full">
      <View className=" flex-row justify-between items-center">
        <Text className=" font-bold text-xl"> Doctor Speciality</Text>
        <TouchableOpacity>
          <Text className=" text-blue-700 font-bold">See All</Text>
        </TouchableOpacity>
      </View>
      <View className=" my-5 ">
        <FlatList
          data={category}
          numColumns={4}
          columnWrapperStyle={{ flex: 1, justifyContent: "space-between" }}
          renderItem={({ item }) => (
            <View className=" flex-col items-center  gap-y-2 mx-4">
              <View className="  bg-blue-100 rounded-full w-[60px] h-[60px] items-center justify-center ">
                <Image
                  source={{ uri: item.imageUrl }}
                  className=" w-10 h-10 "
                />
              </View>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default DoctorSpeciality;
