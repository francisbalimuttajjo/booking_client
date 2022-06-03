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
// const findById = async (id: any) => {
//   const response = await apiClient.get<Tutorial>(`/tutorials/${id}`);
//   return response.data;
// };
// const findByTitle = async (title: string) => {
//   const response = await apiClient.get<Tutorial[]>(`/tutorials?title=${title}`);
//   return response.data;
// };
// const create = async ({ title, description }: Tutorial) => {
//   const response = await apiClient.post<any>("/tutorials", {
//     title,
//     description,
//   });
//   return response.data;
// };
// const update = async (id: any, { title, description, published }: Tutorial) => {
//   const response = await apiClient.put<any>(`/tutorials/${id}`, {
//     title,
//     description,
//     published,
//   });
//   return response.data;
// };
// const deleteById = async (id: any) => {
//   const response = await apiClient.delete<any>(`/tutorials/${id}`);
//   return response.data;
// };
// const deleteAll = async () => {
//   const response = await apiClient.delete<any>("/tutorials");
//   return response.data;
// };
// const TutorialService = {
//   findAll,
//   findById,
//   findByTitle,
//   create,
//   update,
//   deleteById,
//   deleteAll,
// };

const Api = {
  getHotels,
  loginUser,
  authenticateUser,
  getTopRatedHotels,
};
export default Api;
