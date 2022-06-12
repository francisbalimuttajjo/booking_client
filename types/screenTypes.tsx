import { Hotel } from "./apiTypes";

export enum mainRoutes {
  Profile = "Profile",
  ChangePassword = "ChangePassword",
  Home = "Home",
  Booking = "Booking",
  MyBookings = "MyBookings",
  Camera = "Camera",
  HotelDetails = "HotelDetails",
  Search = "Search",
  Map = "Map",
  Review = "Review",
  Success = "Success",
  SignUp = "SignUp",
  LogIn = "LogIn",
  ForgotPassword = "ForgotPassword",
}

export type mainStackParams = {
  Profile: undefined;
  ChangePassword: undefined;
  Home: undefined;
  MyBookings: undefined;
  Camera: undefined;
  Booking: { hotel: Hotel };
  Search: undefined;
  Map: { hotel: Hotel };
  HotelDetails: { hotel: Hotel };
  Review: { hotel: Hotel };
  Success: { message: string; screen: string; title: string };
  SignUp: undefined;
  LogIn: undefined;
  ForgotPassword: undefined;
};
