import { Hotel } from "./apiTypes";

export enum mainRoutes {
  Home = "Home",
  Profile = "Profile",
  HotelDetails = "HotelDetails",
  Search = "Search",
}

export type mainStackParams = {
  Home: undefined;
  Profile: undefined;
  Search: undefined;
  HotelDetails: { hotel:Hotel };

  // CashBook: undefined;
  // Purchases: undefined;
  // entryDetails: { id: undefined };
  // editCashEntry: { id: undefined };
};
