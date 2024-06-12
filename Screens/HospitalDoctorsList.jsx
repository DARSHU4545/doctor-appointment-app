import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import PageHeader from "../components/shared/PageHeader";
import HospitalDoctorTab from "../components/hospital-doctor-page/HospitalDoctorTab";

const HospitalDoctorsList = () => {
  const params = useRoute().params;
  return (
    <View>
      <PageHeader tittle={params.categoryName} />
      <HospitalDoctorTab />
    </View>
  );
};

export default HospitalDoctorsList;
