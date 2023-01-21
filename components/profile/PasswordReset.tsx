import React from "react";
import { Formik, Field } from "formik";
import { Title } from "react-native-paper";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useFns from "./useReset";
import Input from "../reusableComponents/Input";
import Info from "../reusableComponents/Info";

export const Form = () => {
  const { handleSubmit, loading, error, validationSchema, initialValues } =
    useFns();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <View>
          <View style={styles.container}>
            <Title>Enter New Password </Title>
            <Field
              component={Input}
              name="CurrentPassword"
              label="Current Password"
            />
            <Field component={Input} name="NewPassword" label="New Password" />
            <Field
              component={Input}
              name="ConfirmPassword"
              label="Confirm Password"
            />
            {error !== "" && <Info error={error} />}
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.btn}
              disabled={loading}
              onPress={handleSubmit}
            >
              {!loading && <Text style={styles.login_text}>Submit</Text>}
              {loading && <ActivityIndicator size="small" color="white" />}
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};
export default Form;

const styles = StyleSheet.create({
  container: { width: "95%", alignSelf: "center", paddingVertical: "15%" },
  login_text: { color: "#fff", fontWeight: "bold", fontSize: 18 },

  btn: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 7,
    marginTop: 20,
    backgroundColor: "#326fa8",
  },
});
