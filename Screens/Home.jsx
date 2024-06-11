import { View, Text } from "react-native";
import React from "react";
import Header from "../components/home/Header";
import SearchBar from "../components/home/SearchBar";
import Slider from "../components/home/Slider";
import DoctorSpeciality from "../components/home/DoctorSpeciality";

const Home = () => {
  return (
    <View className="flex-1 mt-5 p-4">
      <Header />
      <SearchBar setSearchText={(value) => console.log(value)} />
      <Slider />
      <DoctorSpeciality />
    </View>
  );
};

export default Home;
