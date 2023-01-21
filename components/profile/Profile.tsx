import React from "react";
import { ScrollView } from "react-native";
import Image from "./ImageComponent";
import ChangePassword from "./ChangePassword";
import PersonalInformation from "./PersonalInformation";

const Profile = () => {
  return (
    <ScrollView >
      <Image />
      <PersonalInformation />
      <ChangePassword />
    </ScrollView>
  );
};

export default Profile;
