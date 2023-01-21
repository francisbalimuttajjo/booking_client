import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Title } from "react-native-paper";
import useFns from "./useRegisterFns";
import StepTwo from "./steps/StepTwo";
import StepOne from "./steps/StepOne";
import StepThree from "./steps/StepThree";

const SignUp = () => {
  const {
    handleBack,
    handleStepThree,
    handleStepTwo,
    handleStepOne,
    step,
    formData,
    isLoading,
    error,
  } = useFns();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Title style={styles.title}>Sign Up</Title>

        {step === 1 && (
          <StepOne setFormValues={handleStepOne} formValues={formData} />
        )}

        {step === 2 && (
          <StepTwo
            setFormValues={handleStepTwo}
            formValues={formData}
            handleBack={handleBack}
          />
        )}

        {step === 3 && (
          <StepThree
            setFormValues={handleStepThree}
            formValues={formData}
            handleBack={handleBack}
            isLoading={isLoading}
            error={error}
          />
        )}
      </View>
    </ScrollView>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  title: { fontSize: 32 },
  container: { width: "90%", alignSelf: "center", paddingVertical: "5%" },
});
