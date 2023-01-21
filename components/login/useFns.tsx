import React, { useContext } from "react";
import * as Yup from "yup";
import { NavigationProps } from "../../types/apiTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation } from "react-query";
import api from "../../utils/api";
import { useNavigation } from "@react-navigation/native";
import UserContext from "../../utils/fns/userContext";

export const UseFns = () => {
  const validationSchema = Yup.object().shape({
    Email: Yup.string()
      .trim()
      .email("invalid Email")
      .required("Email is required")
      .label("Email"),
    Password: Yup.string()
      .trim()
      .required("Password is required")
      .label("Password"),
  });

  const initialValues = { Email: "", Password: "" };
  const { navigate } = useNavigation<NavigationProps>();

  const [secureText, setSecureText] = React.useState<boolean>(true);
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const toggleSecureText = () => setSecureText(!secureText);

  const { handleLogin } = useContext(UserContext);

  const { isLoading, mutate } = useMutation(
    (user: { email: string; password: string }) => api.loginUser(user),
    {
      onSuccess: async (data) => {
        handleLogin(data.user);
        setErrorMessage("");
        await AsyncStorage.setItem("BOOKING_TOKEN", data.token);
        navigate("Home");
      },
      onError: (err: {
        response: { data: { status: string; data: string } };
      }) => {
        setErrorMessage(err.response.data.data);
      },
    }
  );

  const handleSubmit = (values: { Email: string; Password: string }) => {
    mutate({ email: values.Email, password: values.Password });
  };

  return {
    handleSubmit,
    isLoading,
    toggleSecureText,
    errorMessage,
    initialValues,
    validationSchema,
    navigate,
    secureText,
    
  };
};
export default UseFns;
