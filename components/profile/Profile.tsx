import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { User } from "../../types/apiTypes";
import api from "../../utils/api";
import { useNavigation } from "@react-navigation/native";
import UserContext from "../../utils/fns/userContext";

const ProfileScreen = () => {
  const { navigate } = useNavigation();
  const queryClient = useQueryClient();
  const [error, setError] = React.useState("");
  const { handleLogin } = useContext(UserContext);
  const user1 = {
    firstName: "checking if it workd",
    lastName: "checking if it workd",
    photo: "nbaf",
    email: "uiri",
    id: "opp",
  };
  const { isLoading, mutate } = useMutation(
    (user: { email: string; password: string }) => api.loginUser(user),
    {
      onSuccess: async (data) => {
        // queryClient.setQueryData("USER_DETAILS", {
        //   user: data.user,
        //   isLoggedIn: true,
        // });
        handleLogin(user1);
        await AsyncStorage.setItem("BOOKING_TOKEN", data.token);
      },
      onError: (err: {
        response: { data: { status: string; data: string } };
      }) => {
        setError(err.response.data.data);
      },
    }
  );

  const user = queryClient.getQueryData("USER_DETAILS");
  const hotels = queryClient.getQueryData("hotels");
  console.log("user_profile", user);
  console.log("user_profile", hotels);
  const credentials = {
    email: "fbalimuttajjo@gmail.com",
    password: "francis",
  };
  if (isLoading) {
    return <Text>fetching user....</Text>;
  }
  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={{ alignSelf: "center", marginTop: "50%" }}>
      <Text>Profile screen </Text>
      <TouchableOpacity
        style={{ backgroundColor: "green", padding: "5%" }}
        onPress={() => {
          mutate(credentials);
        }}
      >
        <Text style={{ color: "#fff" }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: "green", padding: "5%" }}
        onPress={() => navigate("Home")}
      >
        <Text style={{ color: "#fff" }}>home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
