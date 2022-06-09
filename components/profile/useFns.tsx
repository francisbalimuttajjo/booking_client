import * as Yup from "yup";
import React from "react";
import api from "../../utils/api";
import UserContext from "../../utils/fns/userContext";

type Values = {
  FirstName: string;
  LastName: string;
};

export const UseFns = () => {
  const [error, setError] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [isEditing, setIsEditing] = React.useState<boolean>(false);

  const handleEditing = () => setIsEditing(true);
  const cancelEditing = () => setIsEditing(false);

  const { initialState, handleLogin } = React.useContext(UserContext);
  const { firstName, lastName, email, photo, id } = initialState.user;

  const [initialValues, setInitialValues] = React.useState<Values>({
    FirstName: firstName,
    LastName: lastName,
  });

  const validationSchema = Yup.object().shape({
    FirstName: Yup.string()
      .trim()
      .required("First Name is required")
      .label("FirstName"),
    LastName: Yup.string()
      .trim()
      .required("Last Name is required")
      .label("LastName"),
  });

  const handleSubmit = (values: Values) => {
    const { FirstName, LastName } = values;

    setLoading(true);
    api
      .updateUser({
        firstName: FirstName,
        lastName: LastName,
        email,
      })
      .then(() => {
        setLoading(false);
        handleLogin({
          firstName: FirstName,
          lastName: LastName,
          email,
          photo,
          id,
        });
        setIsEditing(false);
        setInitialValues({ FirstName, LastName });
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.data);
      });
  };

  return {
    handleSubmit,
    validationSchema,
    initialValues,
    handleEditing,
    cancelEditing,
    isEditing,
    error,
    loading,
    firstName,
    lastName,
    email,
  };
};

export default UseFns;
