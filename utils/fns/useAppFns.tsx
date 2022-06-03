import React from "react";
import api from "../api";
import { InitialState } from "../../types/apiTypes";

const UseFns = () => {
  const [isAuthenticating, setIsAuthenticating] = React.useState<boolean>(true);
  const [initialState, setInitialState] = React.useState<
    Omit<InitialState, "handleLogin">
  >({
    user: { firstName: "", lastName: "", email: "", photo: "", id: "" },
    isLoggedIn: false,
  });

  const authenticateUser = async () => {
    try {
      const res = await api.authenticateUser();
      setInitialState({
        ...initialState,
        user: res.data,
        isLoggedIn: true,
      });
    } catch (err) {
      console.log(err)
    }
  };

  const handleLogin = (user: InitialState["user"]) => {
    setInitialState({
      ...initialState,
      user,
      isLoggedIn: true,
    });
  };

  return {
    isAuthenticating,
    setIsAuthenticating,
    authenticateUser,
    initialState,
    handleLogin,

  };
};

export default UseFns;
