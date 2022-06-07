import React from "react";
import { InitialState } from "../../types/apiTypes";

const UserContext = React.createContext({
  initialState: {
    user: { firstName: "", lastName: "", email: "", photo: "", id: "" },
    isLoggedIn: false,
  },

  handleLogin: (a: InitialState["user"]): void => {},
  handleLogOut: (): void => {},
});

export default UserContext;
