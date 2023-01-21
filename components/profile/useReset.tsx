import * as Yup from "yup";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import UserContext from "../../utils/fns/userContext";
import { NavigationProps } from "../../types/apiTypes";
import api from "../../utils/api";

type Values = {
  CurrentPassword: string;
  NewPassword: string;
  ConfirmPassword: string;
};

const initialValues: Values = {
  CurrentPassword: "",
  NewPassword: "",
  ConfirmPassword: "",
};

export const UseFns = () => {
  const [error, setError] = React.useState<string>("");
  const { navigate } = useNavigation<NavigationProps>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const { initialState, handleLogOut } = React.useContext(UserContext);

  const validationSchema = Yup.object().shape({
    CurrentPassword: Yup.string()
      .trim()
      .required("Password is required")
      .label("CurrentPassword"),
    NewPassword: Yup.string()
      .trim()
      .required("Password is required")
      .label("NewPassword"),
    ConfirmPassword: Yup.string()
      .trim()
      .oneOf([Yup.ref("NewPassword"), ""], "Passwords don't match")
      .required("password is required")
      .label("ConfirmPassword"),
  });

  const handleSubmit = (values: Values, actions: { resetForm: () => void }) => {
    const { CurrentPassword, NewPassword, ConfirmPassword } = values;
    setLoading(true);
    api
      .updateUserPassword({
        currentPassword: CurrentPassword,
        newPassword: NewPassword,
        confirmPassword: ConfirmPassword,
        email: initialState.user.email,
      })
      .then(() => {
        setLoading(false);
        handleLogOut();
        actions.resetForm();
        navigate("LogIn");
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.data);
      });
  };

  return { handleSubmit, loading, error, validationSchema, initialValues,navigate };
};
export default UseFns;
