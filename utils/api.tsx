import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {
  register: {
    email: string;
    password: string;
    lastName: string;
    firstName: string;
    passwordConfirm: string;
  };
  login: { email: string; password: string };
  updateProfile: { email: string; photo: string };
  updateUser: { email: string; firstName: string; lastName: string };
  bookHotel: {
    hotel_Id: number;
    checkin_date: string | Date;
    nights: number;
    cash_paid: number;
  };
  updatePassword: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
    email: string;
  };
  reviewHotel: {
    hotel_Id: number;
    review: string;
    rating: number;
  };
};

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
  const token: any = await AsyncStorage.getItem("BOOKING_TOKEN");
  const response = await apiClient.get("/users/auth", { headers: { token } });

  return response.data;
};

const updateUserPassword = async ({
  currentPassword,
  newPassword,
  confirmPassword,
  email,
}: Props["updatePassword"]) => {
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

const getBookings = async () => {
  const token: any = await AsyncStorage.getItem("BOOKING_TOKEN");
  const response = await apiClient.get("/booking", {
    headers: { token },
  });

  return response.data.data;
};
const cancelBooking = async (id: number) => {
  const token: any = await AsyncStorage.getItem("BOOKING_TOKEN");

  const response = await apiClient.delete(`/booking/${id}`, {
    headers: { token },
  });

  return response.data.data;
};

const reviewHotel = async ({
  hotel_Id,
  review,
  rating,
}: Props["reviewHotel"]) => {
  const token = await AsyncStorage.getItem("BOOKING_TOKEN");
  const response = await apiClient.post(`/hotels/${hotel_Id}/reviews`, {
    review,
    rating,
    token,
  });

  return response.data.data;
};
const bookHotel = async ({
  hotel_Id,
  checkin_date,
  nights,
  cash_paid,
}: Props["bookHotel"]) => {
  const token = await AsyncStorage.getItem("BOOKING_TOKEN");
  const response = await apiClient.post(`/hotels/${hotel_Id}/booking`, {
    checkin_date,
    nights,
    cash_paid,
    token,
  });

  return response.data.data;
};

const updateUser = async ({
  firstName,
  email,
  lastName,
}: Props["updateUser"]) => {
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
}: Props["updateProfile"]) => {
  const token = await AsyncStorage.getItem("BOOKING_TOKEN");
  const response = await apiClient.post("/users/updateMe", {
    photo,
    email,
    token,
  });

  return response.data.data;
};

const loginUser = async ({ email, password }: Props["login"]) => {
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
}: Props["register"]) => {
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
const searchHotelByPrice = async (priceRange: string) => {
  const response = await apiClient.get(`/hotels?range=${priceRange}`);
  return response.data;
};

const Api = {
  reviewHotel,
  getHotels,
  getHotel,
  bookHotel,
  loginUser,
  registerUser,
  updateUser,
  getBookings,
  cancelBooking,
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
