import * as Yup from "yup";
import React from "react";
import { Formik, Field } from "formik";
import { TextInput, Title } from "react-native-paper";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Input from "../reusableComponents/Input";
import Info from "../reusableComponents/Info";

export const Form = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");
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
  const handleSubmit = (values) => console.log("submit", values);

  return (
    <Formik
      initialValues={{ Email: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <View>
          <View style={styles.container}>
            <Title> Hi , Enter your Email </Title>
            <Field
              component={Input}
              name="Email"
              label="Email"
              left={<TextInput.Icon name="email" color="#bbbdbd" />}
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
