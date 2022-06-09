import React from "react";
import { Formik, Field } from "formik";
import { Caption, Title } from "react-native-paper";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Icon from "react-native-vector-icons/Feather";
import Input from "../reusableComponents/Input";
import Info from "../reusableComponents/Info";
import useFns from "./useFns";

export const Form = () => {
  const {
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
  } = useFns();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <View style={{ ...styles.container, paddingBottom: "20%" }}>
          <View style={styles.sub_container}>
            <Title style={{ marginTop: "5%" }}>Personal Information</Title>
            {isEditing && (
              <TouchableOpacity
                onPress={handleSubmit}
                disabled={loading}
                style={styles.btn}
              >
                {!loading ? (
                  <Text>Save</Text>
                ) : (
                  <ActivityIndicator size="small" color="#326fa8" />
                )}
              </TouchableOpacity>
            )}
            {!isEditing && (
              <TouchableOpacity onPress={handleEditing} style={styles.btn}>
                <Icon name="edit-2" size={20} color="black" />
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.sub_container}>
            {!isEditing && (
              <View style={styles.input_container}>
                <Caption style={styles.caption}>First Name</Caption>
                <Title style={styles.text_transform}>{firstName}</Title>
              </View>
            )}
            {isEditing && (
              <Field component={Input} name="FirstName" label="First Name" />
            )}
          </View>
          <View style={styles.sub_container}>
            {!isEditing && (
              <View style={styles.input_container}>
                <Caption style={styles.caption}>Last Name</Caption>
                <Title style={styles.text_transform}>{lastName}</Title>
              </View>
            )}
            {!isEditing && (
              <View style={styles.input_container}>
                <Caption style={styles.caption}>Email</Caption>
                <Text style={{ marginLeft: 10 }}>{email}</Text>
              </View>
            )}
            {isEditing && (
              <Field component={Input} name="LastName" label="Last Name" />
            )}
          </View>
          {error !== "" && isEditing && <Info error={error} />}
          {isEditing && (
            <View>
              <TouchableOpacity
                onPress={cancelEditing}
                style={styles.cancel_btn}
              >
                <Text>Cancel</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
    </Formik>
  );
};
export default Form;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: "3%",
    paddingVertical: "3%",
    minHeight: 250,
  },
  sub_container: { width: "80%", alignSelf: "center" },
  input_container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginTop: "5%",
  },
  cancel_btn: {
    right: 40,
    position: "absolute",
    marginTop: "10%",
  },

  btn: { right: 0, position: "absolute", marginTop: "5%" },
  caption: { fontSize: 18, marginRight: "10%", marginTop: 6 },
  text_transform: { textTransform: "capitalize" },
});
