import React from "react";
import { useMutation } from "react-query";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/apiTypes";
import api from "../../utils/api";

export type Props = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirm: string;
};

const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  passwordConfirm: "",
};

const UseFns = () => {
  const [step, setStep] = React.useState<number>(1);
  const [error, setError] = React.useState<string>("");
  const { navigate } = useNavigation<NavigationProps>();
  const [formData, setFormData] = React.useState<Props>(initialState);

  const handleBack = () => setStep((step) => step - 1);
  const handleStepTwo = (val: string) => {
    setFormData({ ...formData, email: val });
    setStep((step) => step + 1);
  };
  const handleStepOne = (values: { FirstName: string; LastName: string }) => {
    setFormData({
      ...formData,
      firstName: values.FirstName,
      lastName: values.LastName,
    });
    setStep((step) => step + 1);
  };

  const { isLoading, mutate } = useMutation(
    (user: Props) => api.registerUser(user),
    {
      onSuccess: (data) => {
        setError("");
        navigate("Success", {
          message: data,
        });
        setFormData(initialState);
        setStep(1);
      },
      onError: (err: {
        response: { data: { status: string; data: string } };
      }) => {
        setError(err.response.data.data);
      },
    }
  );
  const handleStepThree = (values: {
    Password: string;
    PasswordConfirm: string;
  }) => {
    const { firstName, lastName, email } = formData;
    setFormData({
      ...formData,
      password: values.Password,
      passwordConfirm: values.PasswordConfirm,
    });

    mutate({
      firstName,
      lastName,
      email,
      password: values.Password,
      passwordConfirm: values.PasswordConfirm,
    });
  };

  return {
    handleBack,
    handleStepThree,
    handleStepTwo,
    handleStepOne,
    step,
    formData,
    isLoading,
    error,
  };
};
export default UseFns;
