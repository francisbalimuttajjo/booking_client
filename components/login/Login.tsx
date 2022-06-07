import React from "react";
import * as Yup from "yup";
import { Formik, Field } from "formik";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Input from "../reusableComponents/Input";
import Welcome from "./Welcome";
import { TextInput } from "react-native-paper";

export const Form = (props) => {
  const validationSchema = Yup.object().shape({
    Amount: Yup.number().required().min(1, "Amount").label("Amount"),
    Remark: Yup.string().trim().required("Remark is required").label("Remark"),
    type: Yup.string().trim().required("type is required").label("type"),
    Category: Yup.string()
      .trim()
      .required("Category is required")
      .label("Category"),
  });
  const initialValues = {};
  const handleSubmit = (val) => console.log(val);

  const [secureText, setSecureText] = React.useState<boolean>(true);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [errorMsg, setErrorMessage] = React.useState<string>("");

  const toggleSecureText = () => setSecureText(!secureText);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, errors }) => (
        <ScrollView>
          <Welcome />
          <View style={{ width: "95%", alignSelf: "center" }}>
            <Field
              component={Input}
              name="Email"
              label="Email"
              left={<TextInput.Icon name="email" />}
            />
            <Field
              component={Input}
              name="Password"
              label="Password"
              secureTextEntry={secureText}
              left={<TextInput.Icon name="lock" />}
              right={
                <TextInput.Icon
                  name={!secureText ? "eye-off" : "eye"}
                  onPress={toggleSecureText}
                />
              }
            />
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                width: "100%",
                backgroundColor: "#326fa8",
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 15,
                borderRadius: 7,
                marginTop: 20,
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
                Login
              </Text>
            </TouchableOpacity>
            <Text style={{ color: "black", fontSize: 14 }}>
              Forgot Password ?
            </Text>
          </View>
        </ScrollView>
      )}
    </Formik>
  );
};
export default Form;

const styles = StyleSheet.create({});
