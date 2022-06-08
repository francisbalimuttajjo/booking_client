import * as Yup from "yup";
import React from "react";
import { Formik, Field } from "formik";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Input from "../../reusableComponents/Input";
import { Props } from "../useRegisterFns";
import Info from "../../reusableComponents/Info";

type Values = { Password: string; PasswordConfirm: string };
type FormProps = {
  handleBack: () => void;
  setFormValues: (values: Values) => void;
  formValues: Props;
  isLoading: boolean;
  error: string;
};

export const Form = (props: FormProps) => {
  const validationSchema = Yup.object().shape({
    Password: Yup.string()
      .trim()
      .required("password is required")
      .label("Password"),
    PasswordConfirm: Yup.string()
      .trim()
      .oneOf([Yup.ref("Password"), ""], "Passwords don't match")
      .required("password is required")
      .label("PasswordConfirm"),
  });

  const handleSubmit = (values: Values) => {
    props.setFormValues({
      Password: values.Password,
      PasswordConfirm: values.PasswordConfirm,
    });
  };

  return (
    <Formik
      initialValues={{
        Password: props.formValues.password,
        PasswordConfirm: props.formValues.passwordConfirm,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <View>
          <View style={styles.container}>
            <Text> Enter Password</Text>
            <Field component={Input} name="Password" label="Password" />
            <Field
              component={Input}
              name="PasswordConfirm"
              label="Confirm Password"
            />
            {props.error !== "" && <Info error={props.error} />}
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.btn}
              onPress={props.handleBack}
              disabled={props.isLoading}
            >
              <Text style={styles.login_text}>back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.btn}
              disabled={props.isLoading}
              onPress={handleSubmit}
            >
              {!props.isLoading && (
                <Text style={styles.login_text}>Submit</Text>
              )}
              {props.isLoading && (
                <ActivityIndicator size="small" color="white" />
              )}
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
