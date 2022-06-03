export type Hotel = {
  name: string;
};

export type User = {
  email: string;
  firstName: string;
  lastName: string;
  id: string;
  photo: string;
};

export type InitialState = {
  isLoggedIn: boolean;
  user: User;
  handleLogin: (a: InitialState["user"]) => void;

  //setInitialState: React.Dispatch<React.SetStateAction<Omit<InitialState, "setInitialState">>>;
  // React.Dispatch<
  //   React.SetStateAction<any>
  //   //   {
  //   //   isLoggedIn: boolean;
  //   //   user: User;
  //   // }
  // >;
};
