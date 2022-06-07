import { Hotel } from "./apiTypes";

export enum mainRoutes {
  Home = "Home",
  Booking = "Booking",
  HotelDetails = "HotelDetails",
  Search = "Search",
  Map = "Map",
}

export enum drawerRoutes {
  Profile = "Profile",
  Home = "HomePage",
}

export type mainStackParams = {
  Home: undefined;
  Booking: undefined;
  Search: undefined;
  Map: { hotel: Hotel };
  HotelDetails: { hotel: Hotel };
};

export type drawerStackParams = {
  Profile: undefined;
  HomePage: undefined;
};
