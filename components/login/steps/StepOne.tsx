import * as Yup from "yup";
import React from "react";
import { Formik, Field } from "formik";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Input from "../../reusableComponents/Input";
import { Props } from "../useRegisterFns";

type Values = {
  FirstName: string;
  LastName: string;
};

type FormProps = {
  setFormValues: (values: Values) => void;
  formValues: Props;
};

export const Form = (props: FormProps) => {
  const validationSchema = Yup.object().shape({
    FirstName: Yup.string()
      .trim()
      .required("FirstName is required")
      .label("FirstName"),
    LastName: Yup.string()
      .trim()
      .required("LastName is required")
      .label("LastName"),
  });

  const handleSubmit = (values: Values) => {
    props.setFormValues({
      FirstName: values.FirstName,
      LastName: values.LastName,
    });
  };

  return (
    <Formik
      initialValues={{
        FirstName: props.formValues.firstName,
        LastName: props.formValues.lastName,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <View>
          <View style={styles.container}>
            <Text>Please Enter your Names</Text>
            <Field component={Input} name="FirstName" label="First Name" />
            <Field component={Input} name="LastName" label="Last Name" />

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
