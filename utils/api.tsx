import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const apiClient = axios.create({
  //baseURL: "http://192.168.43.96:5000/api/v1",
  baseURL: "https://bookingbafra.herokuapp.com/api/v1",
  headers: {
    "Content-type": "application/json",
  },
});

const getHotels = async () => {
  const response = await apiClient.get("/hotels");
  return response.data.data.rows;
};
const getHotel = async (id: number) => {
  const response = await apiClient.get(`/hotels/${id}`);
  return response.data;
};
const getTopRatedHotels = async () => {
  const response = await apiClient.get("/hotels/top-rated");
  return response.data.data;
};

const authenticateUser = async () => {
  const token = await AsyncStorage.getItem("BOOKING_TOKEN");
  const response = await apiClient.post("/users/auth", {
    token,
  });

  return response.data;
};

const updateUserPassword = async ({
  currentPassword,
  newPassword,
  confirmPassword,
  email,
}: {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  email: string;
}) => {
  const token = await AsyncStorage.getItem("BOOKING_TOKEN");
  const response = await apiClient.post("/users/updatePassword", {
    currentPassword,
    newPassword,
    confirmPassword,
    email,
    token,
  });

  return response.data.data;
};

const updateUser = async ({
  firstName,
  email,
  lastName,
}: {
  firstName: string;
  lastName: string;
  email: string;
}) => {
  const token = await AsyncStorage.getItem("BOOKING_TOKEN");
  const response = await apiClient.post("/users/updateMe", {
    firstName,
    lastName,
    email,
    token,
  });

  return response.data.data;
};

const updateProfilePicture = async ({
  photo,
  email,
}: {
  photo: string;
  email: string;
}) => {
  const token = await AsyncStorage.getItem("BOOKING_TOKEN");
  const response = await apiClient.post("/users/updateMe", {
    photo,
    email,
    token,
  });

  return response.data.data;
};

const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const response = await apiClient.post("/users/login", {
    email,
    password,
  });

  return response.data.data;
};

const forgotPassword = async ({ email }: { email: string }) => {
  const response = await apiClient.post("/users/forgotPassword", {
    email,
  });

  return response;
};

const registerUser = async ({
  email,
  password,
  firstName,
  lastName,
  passwordConfirm,
}: {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
  passwordConfirm: string;
}) => {
  const response = await apiClient.post("/users/register", {
    email,
    password,
    firstName,
    lastName,
    passwordConfirm,
  });

  return response.data.data;
};
const searchHotelByName = async (name: string) => {
  const response = await apiClient.get(`/hotels?name=${name}`);
  return response.data;
};
const searchHotelByLocation = async (location: string) => {
  const response = await apiClient.get(`/hotels?location=${location}`);
  return response.data;
};
const searchHotelByPrice = async (price: string) => {
  const response = await apiClient.get(`/hotels?price=${price}`);
  return response.data;
};

const Api = {
  getHotels,
  getHotel,
  loginUser,
  registerUser,
  updateUser,
  forgotPassword,
  authenticateUser,
  updateUserPassword,
  updateProfilePicture,
  getTopRatedHotels,
  searchHotelByName,
  searchHotelByLocation,
  searchHotelByPrice,
};
export default Api;
