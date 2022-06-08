import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const apiClient = axios.create({
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
    token: "jj",
  });

  return response.data;
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
  authenticateUser,
  getTopRatedHotels,
  searchHotelByName,
  searchHotelByLocation,
  searchHotelByPrice,
};
export default Api;
