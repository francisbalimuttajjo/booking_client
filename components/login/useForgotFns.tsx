import React from "react";
import * as Yup from "yup";
import api from "../../utils/api";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/apiTypes";

export const Form = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");
  const { navigate } = useNavigation<NavigationProps>();

  const validationSchema = Yup.object().shape({
    Email: Yup.string()
      .trim()
      .email("invalid Email")
      .required("Email is required")
      .label("Email"),
  });

  const handleSubmit = (
    values: { Email: string },
    actions: { resetForm: () => void }
  ) => {
    setLoading(true);
    api
      .forgotPassword({ email: values.Email })
      .then((response) => {
        setLoading(false);
        navigate("Success", {
          message: response.data.data,
          screen: "LogIn",
          title: "Login",
        });
        actions.resetForm();
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.data);
      });
  };

  return { handleSubmit, error, loading, validationSchema };
};
export default Form;
