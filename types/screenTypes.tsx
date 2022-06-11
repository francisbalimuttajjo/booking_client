import { Hotel } from "./apiTypes";

export enum mainRoutes {
  Profile = "Profile",
  ChangePassword = "ChangePassword",
  Home = "Home",
  Booking = "Booking",
  Camera = "Camera",
  HotelDetails = "HotelDetails",
  Search = "Search",
  Map = "Map",
  Review = "Review",
}

export enum drawerRoutes {
  Success = "Success",
  Home = "HomePage",
  LogIn = "LogIn",
  SignUp = "SignUp",
  ForgotPassword = "ForgotPassword",
}

export type mainStackParams = {
  Profile: undefined;
  ChangePassword: undefined;
  Home: undefined;
  Camera: undefined;
  Booking: { hotel: Hotel };
  Search: undefined;
  Map: { hotel: Hotel };
  HotelDetails: { hotel: Hotel };
  Review: { hotel: Hotel };
};

export type drawerStackParams = {
  HomePage: undefined;
  LogIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  Success: { message: string; screen: string; title: string };
};
