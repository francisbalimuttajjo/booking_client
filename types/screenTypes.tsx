import { Hotel } from "./apiTypes";

export enum mainRoutes {
  Profile = "Profile",
  ChangePassword = "ChangePassword",
  Home = "Home",
  Booking = "Booking",
  HotelDetails = "HotelDetails",
  Search = "Search",
  Map = "Map",
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
  Booking: undefined;
  Search: undefined;
  Map: { hotel: Hotel };
  HotelDetails: { hotel: Hotel };
};

export type drawerStackParams = {
  HomePage: undefined;
  LogIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  Success: { message: string; screen: string; title: string };
};
