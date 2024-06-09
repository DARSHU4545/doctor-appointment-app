import { View, Text } from "react-native";
import React from "react";
import Header from "../components/home/Header";
import SearchBar from "../components/home/SearchBar";

const Home = () => {
  return (
    <View className="flex-1 mt-5 p-4">
      <Header />
      <SearchBar setSearchText={(value) => console.log(value)} />
    </View>
  );
};

export default Home;
