import { Hotel } from "./apiTypes";

export enum mainRoutes {
  Home = "Home",
  Booking = "Booking",
  Profile = "Profile",
  HotelDetails = "HotelDetails",
  Search = "Search",
  Map = "Map",
}

export type mainStackParams = {
  Home: undefined;
  Profile: undefined;
  Booking: undefined;
  Search: undefined;
  Map: { hotel: Hotel };
  HotelDetails: { hotel: Hotel };

 
};
