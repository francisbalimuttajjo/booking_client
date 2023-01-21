import * as Yup from "yup";
import React from "react";
import { Formik, Field } from "formik";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Input from "../../reusableComponents/Input";
import { TextInput } from "react-native-paper";
import { Props } from "../useRegisterFns";

type FormProps = {
  handleBack: () => void;
  setFormValues: (val: string) => void;
  formValues: Props;
};

export const Form = (props: FormProps) => {
  const validationSchema = Yup.object().shape({
    Email: Yup.string()
      .trim()
      .email("invalid Email")
      .required("Email is required")
      .label("Email"),
  });

  const handleSubmit = (value: { Email: string }) => {
    props.setFormValues(value.Email);
  };

  return (
    <Formik
      initialValues={{ Email: props.formValues.email }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <View>
          <View style={styles.container}>
            <Text> Hi {props.formValues.firstName}, Enter your Email </Text>
            <Field
              component={Input}
              name="Email"
              label="Email"
              left={<TextInput.Icon name="email" color="#bbbdbd" />}
            />

            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.btn}
              onPress={props.handleBack}
            >
              <Text style={styles.login_text}>back</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.btn}
              onPress={handleSubmit}
            >
              <Text style={styles.login_text}>Next</Text>
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
