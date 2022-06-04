export type Hotel = {
  name: string;
  id: number;
  mainImage: string;
  price: number;
  physicalLocation: string;
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
};

export type NavigationProps = {
  navigate: (route: string, params?: { id?: number }) => void;
  goBack: () => void;
};
