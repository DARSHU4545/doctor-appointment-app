import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const DoctorSpeciality = () => {
  const navigate = useNavigation();
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    axios
      .get(
        "https://doctor-appointment-webapp-bakend.onrender.com/api/categories"
      )
      .then((res) => {
        setCategory(res.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  // Function to render skeleton loader
  const renderSkeleton = () => {
    return (
      <View className="flex-col items-center gap-y-2 mx-2">
        <View className="bg-gray-300 rounded-full w-[60px] h-[60px] items-center justify-center" />
        <View className="w-10 h-4 bg-gray-300 rounded-md mt-2" />
      </View>
    );
  };

  return (
    <View className="my-3 w-full">
      <View className="flex-row justify-between items-center">
        <Text className="font-bold text-lg">Doctor Speciality</Text>
        <TouchableOpacity
          onPress={() => navigate.navigate("doctorSpecialitylist")}
        >
          <Text className="text-blue-700 font-bold text-lg">See All</Text>
        </TouchableOpacity>
      </View>
      <View className="my-3">
        {loading ? (
          // Render skeleton loaders while loading
          <FlatList
            data={Array.from({ length: 4 })}
            numColumns={4}
            columnWrapperStyle={{
              flex: 1,
              justifyContent: "space-between",
              marginVertical: 6,
            }}
            renderItem={renderSkeleton}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          // Render actual data after loading
          <FlatList
            data={category}
            numColumns={4}
            columnWrapperStyle={{
              flex: 1,
              justifyContent: "space-between",
              marginVertical: 6,
            }}
            renderItem={({ item, index }) =>
              index < 4 && (
                <View className="flex-col items-center gap-y-2 mx-2">
                  <TouchableOpacity
                    className="bg-blue-100 rounded-full w-[60px] h-[60px] items-center justify-center"
                    onPress={() => {
                      navigate.navigate("hospital-doctors-list", {
                        categoryName: item.name,
                      });
                    }}
                  >
                    <Image
                      source={{ uri: item.imageUrl }}
                      className="w-10 h-10"
                    />
                  </TouchableOpacity>
                  <Text>{item.name}</Text>
                </View>
              )
            }
          />
        )}
      </View>
    </View>
  );
};

export default DoctorSpeciality;
