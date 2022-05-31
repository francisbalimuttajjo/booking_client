export enum mainRoutes {
  WelcomePage = "Welcome",
}
export enum tabRoutes {
  HomePage = "Home",
  ProfilePage = "Profile",
  SearchPage = "Search",
}

export type tabStackParams = {
  Home: undefined;
  Profile: undefined;
  Search: undefined;
  // CashBook: undefined;
  // Purchases: undefined;
  // entryDetails: { id: undefined };
  // editCashEntry: { id: undefined };
};

export type mainStackParams = {
  Welcome: undefined;
  // CashBook: undefined;
  // Purchases: undefined;
  // entryDetails: { id: undefined };
  // editCashEntry: { id: undefined };
};
