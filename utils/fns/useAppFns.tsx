import React from "react";
import api from "../api";
import { InitialState } from "../../types/apiTypes";

const user = { firstName: "", lastName: "", email: "", photo: "", id: "" };

const UseFns = () => {
  const [isAuthenticating, setIsAuthenticating] = React.useState<boolean>(true);
  const [initialState, setInitialState] = React.useState<
    Omit<InitialState, "handleLogin">
  >({
    user,
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
      console.log(err);
    }
  };

  const handleLogin = (user: InitialState["user"]) => {
    setInitialState({
      ...initialState,
      user,
      isLoggedIn: true,
    });
  };
  const handleLogOut = () => {
    console.log("1", initialState);
    setInitialState({
      ...initialState,
      user,
      isLoggedIn: false,
    });
    console.log("2", initialState);
  };

  return {
    isAuthenticating,
    setIsAuthenticating,
    authenticateUser,
    initialState,
    handleLogin,
    handleLogOut,
  };
};

export default UseFns;
